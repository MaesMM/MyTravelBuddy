const { User } = require("../models");

const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { createTokens, validateToken } = require("./JWT");

const register = async (req, res) => {
  const body = req.body;

  // email already exists check
  const user = await User.findOne({ where: { email: body.email } });
  if (user) res.status(400).json({ error: "Email already in use !" });

  bcrypt.hash(body.password, 10).then((hash) => {
    User.create({
      name: body.name,
      firstname: body.firstname,
      email: body.email,
      password: hash,
    })
      .then(() => {
        res.status(200).send("User Registered.");
      })
      .catch((err) => {
        if (err) {
          res.status(400).json({ error: err });
        }
      });
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (!user) res.status(400).json({ error: "Email not assigned !" });

  const dbPassword = user.password;
  bcrypt.compare(password, dbPassword).then((match) => {
    if (!match) {
      res.status(400).json({ error: "Wrong email or password !" });
    } else {
      const accessToken = createTokens(user);

      res.cookie("access-token", accessToken, {
        domain: ".localhost",
        secure: false,
        maxAge: 60 * 60 * 1000, //milliseconds
        httpOnly: true,
      });

      return res.status(200).send("Successfully logged in.");
    }
  });
};

const profile = (req, res) => {
  return res.status(200).send("User profile");
};

module.exports = { register, login, profile };
