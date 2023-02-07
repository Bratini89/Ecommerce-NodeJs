const AuthServices = require("../services/auth.services");
const { use } = require("../utils/mailer");
const transporter = require("../utils/mailer");
const CartServices = require("../services/car.services");

const register = async (req, res) => {
  try {
    const user = req.body;
    const userCreated = await AuthServices.register(user);
    if (userCreated) {
      const { id } = userCreated;
      await CartServices.createCart(id);
      res.status(201).json({ message: "User created" });
      await transporter.sendMail({
        to: userCreated.email,
        from: "bratiniiiii@gmail.com",
        subjetc: "Email confirmation",
        html: "<h1>Welcome to the ecommerce</h1> <p>Please, confirm your email in the following link </p><p> <a href='#'' target='new_blank'>Click me</a>",
      });
    } else {
      res.status(400).json({ message: "Something wrong" });
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({
        error: "Missing data",
        message: "Not email provided",
      });
    }
    if (!password) {
      res.status(400).json({
        error: "Missing data",
        message: "Not password provided",
      });
    }
    const result = await AuthServices.login({ email, password });
    if (result.isValid) {
      const { username, id, email } = result.user;
      const userData = { username, id, email };
      const token = AuthServices.genToken(userData);
      userData.token = token;
      res.json(userData);
    } else {
      res.status(400).json("user not found");
    }
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  register,
  login,
};
