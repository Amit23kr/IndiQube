const Videos = require("../models/video.model");

// Create and Save a new Videos
exports.create = (req, res) => {
  // Validate request
  if (!req.body.thumbnail_url) {
    return res.status(400).send({
      message: "videos content can not be empty"
    });
  }
  // Create a Videos
  const video = new Videos({
    title: req.body.title || "Untitled videos",
    thumbnail_url: req.body.thumbnail_url,
    video_url: req.body.video_url,
    second: req.body.second
  });

  // Save videos in the database
  video
    .save()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Videos."
      });
    });
};

// Retrieve and return all videoss from the database.
exports.findAll = (req, res) => {
  Videos.find()
    .then(videos => {
      res.send(videos);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving videoss."
      });
    });
};

// Find a single videos with a videosId
exports.findOne = (req, res) => {
  Videos.findById(req.params.videoId)
    .then(video => {
      if (!video) {
        return res.status(404).send({
          message: "videos not found with id " + req.params.videoId
        });
      }
      res.send(video);
    })
    .catch(err => {
      if (err.kind === "ObjectId") {
        return res.status(404).send({
          message: "videos not found with id " + req.params.videoId
        });
      }
      return res.status(500).send({
        message: "Error retrieving videos with id " + req.params.videoId
      });
    });
};

// Delete a videos with the specified videosId in the request
exports.delete = (req, res) => {
  Videos.findByIdAndRemove(req.params.videoId)
    .then(video => {
      if (!video) {
        return res.status(404).send({
          message: "videos not found with id " + req.params.videoId
        });
      }
      res.send({ message: "videos deleted successfully!" });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "videos not found with id " + req.params.videoId
        });
      }
      return res.status(500).send({
        message: "Could not delete videos with id " + req.params.videoId
      });
    });
};
