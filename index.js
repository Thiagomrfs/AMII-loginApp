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
        email: "Thiago@thiago.com",
        address: "Rua prepexes, 123",
        height: "1.86m",
        age: 18,
        vote: "Sim"
    },
    {
        name: "Rodrigo Rodolfo Silva Brito",
        email: "Rodolfo@virtual.ufc.br",
        address: "Rua pé de pé, 321",
        height: "1.70m",
        age: 59,
        vote:"Sim"
    },
    {
        name: "Valdisney Sampaio Moreira",
        email: "Val@disney.com",
        address: "Rua, 525",
        height: "1.70m",
        age: 32,
        vote: "Sim"
    },
    {
        name: "Valdisney Sampaio Vieira",
        email: "Val@disney.com",
        address: "Rua, 525",
        height: "1.70m",
        age: 15,
        vote: "Não"
    },
    {
        name: "Valdisney Silva Moreira",
        email: "Val@disney.com",
        address: "Rua, 525",
        height: "1.70m",
        age: 32,
        vote: "Sim"
    },
    {
        name: "Valdisney Carvalho Moreira",
        email: "Val@disney.com",
        address: "Rua, 525",
        height: "1.70m",
        age: 32,
        vote: "Sim"
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