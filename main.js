const express = require("express");
const app = express();
app.use(express.static("./build"));

const path = require("path");
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 4176;
console.log("server started on port:", PORT);
app.listen(PORT);
