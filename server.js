let express = require('express');
let app = express();
//Setup the view Engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

let bodyparser =require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));


app.use(express.static('img'));
app.use(express.static('css'));
var filePath=__dirname+"/views/";

app.get('/', function (rqe, res) {
    let fileName =filePath+"index.html";
    res.sendFile(fileName);
});
app.get('/addnew', function (rqe, res) {
    let fileName =filePath+"addnewtask.html";
    res.sendFile(fileName);
});
app.get('/list', function (rqe, res) {
    res.render("listall.html",{mydata:db})
});

var db=[];

app.post('/add', function (req, res) {
    let data =req.body;
    db.push(data);
    res.render("listall.html",{mydata:db})
})
app.listen(8080);