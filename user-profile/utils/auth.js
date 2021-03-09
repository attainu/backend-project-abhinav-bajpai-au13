const crypto = require('crypto');

const hashPassword = (plainText) => {
    return crypto.createHash('sha256', 'secret key')
    .update(plainText)
    .digest('hex');
}

module.exports = { hashPassword };