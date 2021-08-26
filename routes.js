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

    users.splice(item, 1);

    res.render('pages/cadastro', {users: users})
});

router.post('/cadastro/update',(req,res)=>{
    users[req.body.id].name=req.body.name;
    users[req.body.id].email=req.body.email;
    users[req.body.id].address=req.body.address;
    users[req.body.id].age=req.body.age;
    users[req.body.id].height=req.body.height;
    users[req.body.id].vote=req.body.vote;

    console.log("Dados recebidos: ", req.body);

    res.sendStatus(200);
});

router.get('/cadastro/list',(req,res)=>{
    res.send("lista");
});

router.post('/cadastro/addUser',(req,res)=>{
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRegex.test(req.body.email)) {
        res.sendStatus(400);
        return
    }

    req.body.height = Number(req.body.height).toFixed(2);
    req.body.height += "m";

    users.push(req.body);

    res.sendStatus(200)
});

module.exports = router;