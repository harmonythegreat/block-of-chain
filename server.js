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
app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname, 'index.html'))
});


app.post('/', function(req, res){
    
})
app.get('/about', function(req, res){
    res.sendFile(path.resolve(__dirname, 'about.html'))
});
app.get('/api', function(req, res){
    res.sendFile(path.resolve(__dirname, 'api.html'))
});
app.get('/bcam', function(req, res){
    res.sendFile(path.resolve(__dirname, 'bcam.html'))
});
app.get('/blog', function(req, res){
    res.sendFile(path.resolve(__dirname, 'blog.html'))
});
app.get('/careers', function(req, res){
    res.sendFile(path.resolve(__dirname, 'careers.html'))
});
app.get('/charts', function(req, res){
    res.sendFile(path.resolve(__dirname, 'charts.html'))
});
app.get('/defi', function(req, res){
    res.sendFile(path.resolve(__dirname, 'defi.html'))
});
app.get('/exchange', function(req, res){
    res.sendFile(path.resolve(__dirname, 'exchange.html'))
});
app.get('/explorer', function(req, res){
    res.sendFile(path.resolve(__dirname, 'explorer.html'))
});
app.get('/institutional', function(req, res){
    res.sendFile(path.resolve(__dirname, 'institutional.html'))
});
app.get('/learning-portal', function(req, res){
    res.sendFile(path.resolve(__dirname, 'learning-portal.html'))
});
app.get('/manifest', function(req, res){
    res.sendFile(path.resolve(__dirname, 'manifest.html'))
});
app.get('/nfts', function(req, res){
    res.sendFile(path.resolve(__dirname, 'nfts.html'))
});
app.get('/podcast', function(req, res){
    res.sendFile(path.resolve(__dirname, 'podcast.html'))
});
app.get('/press', function(req, res){
    res.sendFile(path.resolve(__dirname, 'press.html'))
});
app.get('/prices', function(req, res){
    res.sendFile(path.resolve(__dirname, 'prices.html'))
});
app.get('/research', function(req, res){
    res.sendFile(path.resolve(__dirname, 'research.html'))
});
app.get('/security', function(req, res){
    res.sendFile(path.resolve(__dirname, 'security.html'))
});
app.get('/ventures', function(req, res){
    res.sendFile(path.resolve(__dirname, 'ventures.html'))
});
app.get('/wallet', function(req, res){
    res.sendFile(path.resolve(__dirname, 'wallet.html'))
});
app.get('/*', function(req, res){
    res.redirect('/')
    res.sendFile(path.resolve(__dirname, 'index.html'))
});
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
let port = process.env.PORT || 8081
app.listen(port, () => {
    console.log('Server is started on',port)
});


