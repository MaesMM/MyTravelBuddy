const {sign, verify} = require("jsonwebtoken");

const createTokens = (user) => {
    // TODO - Change token's secret string !!!
    const accessToken = sign({ 
        email: user.email, id: user.id }, 
        "thisisasecretandneedstobechanged" // TODO - Change that !!
    );

    return accessToken;
};

const validateToken = (req, res, next) => {
    const accessToken = req.cookies["access-token"]

    if (!accessToken) {
        return res.status(400).json({ error: "User not authenticated !"});
    };

    try {
        // Change secret !!
        const validToken = verify(accessToken, "thisisasecretandneedstobechanged")

        if (validToken) {
            req.authenticated = true
            return next()
        };
    } catch (err) {
        return res.status(400).json({ error: err});
    };
};

module.exports = { createTokens, validateToken };