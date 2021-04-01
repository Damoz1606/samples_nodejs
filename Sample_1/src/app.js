const express = require("express");
const morgan = require("morgan");
const path = require("path");
const app = express();

const routes = require("./routes/index");

//settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/assets", express.static(path.join(__dirname, "assets")));

//middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/", routes);

//listeners
app.listen(app.get("port"), () => {
  console.log("Server on port: " + app.get("port"));
});
