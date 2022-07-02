const express = require('express');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const path = require ('path');
const cors = require ('cors');
const { Server } = require('http');
const app = express();

// app.use(bodyparser());
app.use(express.json());
app.use(express.static(__dirname));
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    databse: 'playDB'
})

app.get('/signup', function(req, res){
    res.sendFile(path.resolve(__dirname, 'signup.html'))
});

app.post('/', function(req, res){
    
})

// connection.connect(function(err){
//     if (err){
//         return console.err('error;' + error.message);
//     }

//     console.log('connection to mysql initiated');
// })
connection.connect ((err)=>{
    if (err){
        return console.error('error:' + err.message);
    }

    console.log('connected to mysql');
});

const server = app.listen(process.env.PORT || 8081, () => {
    console.log('Server is started')
});


