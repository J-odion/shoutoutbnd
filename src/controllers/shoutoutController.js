const Shoutout = require("../models/Shoutout");

exports.createShoutout = async (req, res) => {
  try {
    const { sender, recipient, message } = req.body;
    const shoutout = new Shoutout({ sender, recipient, message });
    await shoutout.save();

    console.log(shoutout)
    res.status(201).json(shoutout);
  } catch (error) {
    res.status(500).json({ error: "Error creating shoutout" });
  }
};

exports.getShoutouts = async (req, res) => {
  try {
    const { recipient } = req.query;
    const shoutouts = await Shoutout.find({ recipient });
    console.log(shoutouts)
    res.status(200).json(shoutouts);
  } catch (error) {
    res.status(500).json({ error: "Error retrieving shoutouts" });
  }
};
