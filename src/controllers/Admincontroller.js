const Admin = require("../models/admin");
const Shoutout = require("../models/Shoutout");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const admin = await Admin.findOne({ username });
    if (!admin || !(await bcrypt.compare(password, admin.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};

exports.moderateShoutout = async (req, res) => {
  try {
    const { id, action } = req.body;
    if (action === "approve") {
      await Shoutout.findByIdAndUpdate(id, { moderated: true });
    } else {
      await Shoutout.findByIdAndDelete(id);
    }
    res.status(200).json({ message: "Shoutout moderated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error moderating shoutout" });
  }
};
