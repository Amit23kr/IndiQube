module.exports = app => {
  const videos = require("../controllers/video.controller.js");

  // Create a new videos
  app.post("/videos", videos.create);

  // Retrieve all videoss
  app.get("/videos", videos.findAll);

  // Retrieve a single videos with videosId
  app.get("/videos/:videoId", videos.findOne);

  // Delete a videos with videosId
  app.delete("/videos/:videoId", videos.delete);
};
