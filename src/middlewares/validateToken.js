const jwt = require('jsonwebtoken');

const secretToken = process.env.JWT_SECRET || 'notSoSecretToken';

const validateToken = (req, res, next) => {
  try {
    const portadorToken = req.header('Authorization');
    if (!portadorToken) {
      return res.status(401).json({ message: 'Token not found' });
    }

    const extraindoToken = portadorToken.split(' ')[1];

    const payload = jwt.verify(extraindoToken, secretToken);
    req.user = payload;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { validateToken };