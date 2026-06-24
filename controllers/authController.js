const bcrypt = require('bcryptjs');
const Account = require('../models/Account');

exports.showRegister = (req, res) => {
  res.render('auth/register', {
    title: 'Daftar Akaun',
    error: null
  });
};

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingAccount = await Account.findOne({ email });

    if (existingAccount) {
      return res.render('auth/register', {
        title: 'Daftar Akaun',
        error: 'Email sudah didaftarkan.'
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await Account.create({
      name,
      email,
      password: hashedPassword
    });

    res.redirect('/login');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.showLogin = (req, res) => {
  res.render('auth/login', {
    title: 'Log Masuk',
    error: null
  });
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const account = await Account.findOne({ email });

    if (!account) {
      return res.render('auth/login', {
        title: 'Log Masuk',
        error: 'Email atau kata laluan salah.'
      });
    }

    const isMatch = await bcrypt.compare(password, account.password);

    if (!isMatch) {
      return res.render('auth/login', {
        title: 'Log Masuk',
        error: 'Email atau kata laluan salah.'
      });
    }

    req.session.user = {
      id: account.id,
      name: account.name,
      email: account.email
    };

    res.redirect('/aduan');
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
};