const User = require("../model/UserModel.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

/* Generate JWT */
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
};

/* SIGNUP */
exports.signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields required",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await User.create({ username, email, password });

    // ✅ AUTO LOGIN TOKEN
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // ✅ SET COOKIE
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
      })
      .status(201)
      .json({
        success: true,
        message: "Signup successful",
        token,
      });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({
      success: false,
      message: "Signup failed",
    });
  }
};

/* LOGIN */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Check user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // 3. CREATE TOKEN (THIS WAS MISSING)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    // 4. Send token (cookie + json)
    res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "lax",
      })
      .status(200)
      .json({
        success: true,
        message: "Login successful",
        token,
      });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

exports.logout = (req, res) => {
  res
    .clearCookie("token", {
      httpOnly: true,
      sameSite: "lax",
    })
    .json({ success: true });
};
