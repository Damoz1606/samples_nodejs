const express = require("express");
const router = express.Router();

const menu = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About me",
    url: "/about",
  },
  {
    name: "Services",
    url: "/services",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

router.get("/", (req, res) => {
  var nav_data = {
    title: "Home",
    url: req.url,
    menu: menu,
  };
  res.render("index", nav_data);
});

router.get("/about", (req, res) => {
  var nav_data = {
    title: "About",
    url: req.url,
    menu: menu,
  };
  res.render("about", nav_data);
});

router.get("/services", (req, res) => {
  var nav_data = {
    title: "Services",
    url: req.url,
    menu: menu,
  };
  res.render("services", nav_data);
});

router.get("/contact", (req, res) => {
  var nav_data = {
    title: "Contact",
    url: req.url,
    menu: menu,
  };
  res.render("contact", nav_data);
});

module.exports = router;
