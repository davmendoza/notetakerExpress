var path = require("path");

module.exports = function (app) {
  

  // should return notes

  app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
  });

  // should return index

  app.get("*", function (req, res) {
    console.log('we are here');
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};