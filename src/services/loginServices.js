const { User } = require('../models');

const execulteLogin = async ({ email, password }) => {
  try {
    const user = await User.findOne({ where: { email, password } }); 
    return user;
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = {
  execulteLogin,
};