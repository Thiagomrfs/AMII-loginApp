const express = require("express");
const app = express();
const routes = require("./routes");

const expressLayouts = require("express-ejs-layouts");
const { urlencoded } = require("express");

const port = 3000;
const address = "localhost";


global.users =[
    {
        name: "Thiago Marinho d. Farias",
        address: "Rua prepexes, 123",
        email: "Thiago@thiago.com",
        age: 18,
        height: "1.86m",
        vote: true
    },
    {
        name: "Rodrigo Rodolfo Silva Brito",
        address: "Rua pé de pé, 321",
        email: "Rodolfo@virtual.ufc.br",
        age: 59,
        height: "1.70m",
        vote:true
    },
    {
        name: "Valdisney Sampaio Moreira",
        address: "Rua, 525",
        email: "Val@disney.com",
        age: 32,
        height: "1.70m",
        vote: true
    },
    {
        name: "Valdisney Sampaio Vieira",
        address: "Rua, 525",
        email: "Val@disney.com",
        age: 15,
        height: "1.70m",
        vote: false
    },
    {
        name: "Valdisney Silva Moreira",
        address: "Rua, 525",
        email: "Val@disney.com",
        age: 32,
        height: "1.70m",
        vote: true
    },
    {
        name: "Valdisney Carvalho Moreira",
        address: "Rua, 525",
        email: "Val@disney.com",
        age: 32,
        height: "1.70m",
        vote: true
    },
];



app.set('view engine','ejs');
app.use(expressLayouts);

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/',routes);

const server = app.listen(port,address,()=>{
    let host = server.address().address;
    let port = server.address().port;
    console.log(`> Server rodando em http://${host}:${port}`);
});