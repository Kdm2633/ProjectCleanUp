const resetPassword = async (req, res, next) => {
  try {
    const [User, { hashPassword, comparePassword }] = await Promise.all([
      import("../models/user.mjs"),
      import("../helpers/auth.cjs"),
    ]);
    const { email, password, resetCode } = req.body;
    // find user based on email and resetCode
    const user = await User.findOne({ email, resetCode });
    // if user not found
    if (!user) {
      return res.json({ error: "Email or reset code is invalid" });
    }
    // if password is short
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);
    user.password = hashedPassword;
    user.resetCode = "";
    await user.save();
    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
  }
};
const signup = async (req, res, next) => {
  console.log("Signup Hit");
  try {
    const [User, { hashPassword, comparePassword }, jwt, dotenv] =
      await Promise.all([
        import("../models/user.mjs"),
        import("../helpers/auth.cjs"),
        import("jsonwebtoken"),
        import("dotenv"),
      ]);
    dotenv.config();
    // validation
    const { name, email, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!email) {
      return res.json({
        error: "Email is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }

    // const exist = await User.findOne({ email });
    // if (exist) {
    //   return res.json({
    //     error: "Email is taken",
    //   });
    // }
    // hash password
    const hashedPassword = await hashPassword(password);
    try {
      const user = await User.default({
        name,
        email,
        password: hashedPassword,
      }).save();
      // create signed token
      const token = jwt.default.sign(
        { _id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );
      const { password, ...rest } = user._doc;
      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
};

const signin = async (req, res, next) => {
  try {
    const [User, { comparePassword }, jwt, dotenv] = await Promise.all([
      import("../models/user.mjs"),
      import("../helpers/auth.cjs"),
      import("jsonwebtoken"),
      import("dotenv"),
    ]);
    dotenv.config();
    // check if our db has user with that email
    const user = await User.default.findOne({ email: req.body.email });
    if (!user) {
      return res.json({
        error: "No user found",
      });
    }
    // check password
    const match = await comparePassword(req.body.password, user.password);
    if (!match) {
      return res.json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.default.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    user.password = undefined;
    user.secret = undefined;
    res.json({
      token,
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

const forgotPassword = async (req, res, next) => {
  try {
    const [User, { nanoid }, { setApiKey, send }, dotenv] = await Promise.all([
      import("../models/user.mjs"),
      import("nanoid"),
      import("@sendgrid/mail"),
      import("dotenv"),
    ]);
    dotenv.config();
    setApiKey(process.env.SENDGRID_KEY);
    const { email } = req.body;
    // find user by email
    const user = await User.default.findOne({ email });
    console.log("USER ===> ", user);
    if (!user) {
      return res.json({ error: "User not found" });
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports = { signup, signin, forgotPassword, resetPassword };
