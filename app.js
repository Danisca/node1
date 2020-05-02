const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/views/learn_more.html",function(req,res){
    res.sendFile(__dirname + "/views/learn_more.html");
});

app.listen(process.env.PORT || 3000,function(){
    console.log("server is running at 3000 port");
    
});