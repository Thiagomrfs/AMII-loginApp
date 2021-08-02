const express = require("express");
const router = express.Router();

let db = require("./db");

router.get("/", (req, res) => {
    res.render("pages/home");
    res.send("pagina de teste");
});

module.exports = router;