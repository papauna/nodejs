const User = require('../models/User');

exports.index = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.store = async (req, res) => {
  try {
    const user = await User.create({
      name: 'Mama4',
      email: 'mama@test.com'
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};