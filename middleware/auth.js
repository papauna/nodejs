const isLogin = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  }

  next();
};

const isGuest = (req, res, next) => {
  if (req.session.user) {
    return res.redirect('/aduan');
  }

  next();
};

module.exports = {
  isLogin,
  isGuest
};