const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    user: "freedb_CaioRangel",
    host: "sql.freedb.tech",
    password: "TCx!c3eA@C2JG4t",
    database: "freedb_Counter-Stress",

});

app.get('/',(req,res)=> {

    return res.json ({
        message: "Ta rodando"
    });

});

app.post('/register',(req,res) =>{

    const nome = req.body.nome;
    const senha = req.body.senha;

    db.query(
        "INSERT INTO usuarios (nome,senha) VALUES (?,?)",
        [nome,senha],
        (err,result) =>{
            console.log(err);
        }
    );

});

app.listen(3000, '127.0.0.1');