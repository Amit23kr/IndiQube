const mongoose = require("mongoose");

const VideoSchema = mongoose.Schema(
  {
    title: String,
    thumbnail_url: String,
    video_url: String,
    second: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Videos", VideoSchema);
