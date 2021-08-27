const express = require("express");
const router = express.Router();

router.use(express.static('public'));

router.get('/',(req,res)=>{
    res.render('pages/home');
});

router.get('/about',(req,res)=>{ 
    res.render('pages/about');
});

router.get('/cadastro',(req,res)=>{ 
    res.render('pages/cadastro',{users:users}); 
});

router.post('/cadastro/remove',(req,res)=>{
    let item = req.body.id;

    if(users.length==0) {
        console.log("Erro: Não há elemento a ser removido!");
        return res.status(500)
    } else if (typeof users[item] === "undefined") {
        console.log("Erro: Não há elemento correspondente!");
        return res.status(400)
    }

    users.splice(item, 1);
});

router.post('/cadastro/update',(req,res)=>{
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if (!emailRegex.test(req.body.email)) {
        res.sendStatus(400);
        return
    }

    if (req.body.height.slice(-1) != "m") {
        req.body.height += "m";
    }

    if (req.body.vote.toLowerCase() != "sim" || req.body.vote.toLowerCase() != "não") {
        res.sendStatus(400);
        return
    }

    if (typeof req.body.age != Number) {
        res.sendStatus(400);
        return
    }
    
    users[req.body.id].name=req.body.name;
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    res.sendStatus(200);
});

router.get('/cadastro/list',(req,res)=>{
    res.send(users);
});

router.post('/cadastro/addUser',(req,res)=>{
    let user = {name:"",email:"",address:"",height:"",age:"",vote:""};

    user.name = req.body.name;
    user.email = req.body.email;
    user.address = req.body.address;
    user.height = req.body.height;
    user.age = req.body.age;
    user.vote = req.body.vote;

    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(user.email)) {
        res.sendStatus(400);
        return
    }

    user.height = Number(user.height).toFixed(2);
    user.height += "m";

    users.push(user);

    res.sendStatus(200)
});

module.exports = router;