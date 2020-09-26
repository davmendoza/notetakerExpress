var path = require("path");

module.exports = function (app) {

  // should return notes

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/notes.html"));
  });

  // should return index

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../Develop/public/index.html"));
  });

};