const express = require("express");
const router = express.Router();


let db = require("./db");

router.use(express.static("public"));


router.get("/", (req, res) => {
    res.render("pages/home");
});

router.get("/about",(req,res)=>{
    res.send("Sobre");
});

router.get("/curriculo",(req,res)=>{
    res.send("Meu currículo");
});

router.get("/cadastro/insert",(req,res)=>{
    res.send("inserir um usuario");
});

router.get("/cadastro/list",(req,res)=>{
    res.send("listar de usuarios cadastrado");
});

module.exports = router;