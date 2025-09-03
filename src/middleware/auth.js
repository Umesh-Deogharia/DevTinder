const adminAuth = (req, res, next) => {
    const token = 'xyz';
    const isAdminAuthorize = token === 'xyz';
    if (!isAdminAuthorize) {
        res.status(401).send('Unautorizes User');
    } else {
        next();
    }
}

module.exports = { adminAuth };