const mongoose = require("mongoose");


const ShoutoutSchema = new mongoose.Schema({
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

// export default mongoose.models.Shoutout || mongoose.model('Shoutout', ShoutoutSchema);
module.exports = mongoose.model("Shoutout", ShoutoutSchema);
