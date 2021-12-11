const express=require("express");
var bodyParser = require('body-parser');
const path=require("path");
require("./db/conn");
const app=express();
const User=require("./models/usermessage");
const Pet=require("./models/pets");

const hbs=require("hbs");
const port=process.env.port||3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine","hbs");


app.get("/",(req,res)=>{
    res.render("index");
})

app.post("/umessage",(req,res)=>{
    var myData = new User(req.body);
    myData.save().then(item => {
    res.render("thankadd"); })
    .catch(err => {
    res.render("index"); });
})

app.get("/adopt",async(req,res)=>{
    var data=await Pet.find();
    res.render("formadopt",{data:data});
})

app.get("/addpet",(req,res)=>{
    res.render("formaddpet");
})


app.get("/home",(req,res)=>{
    res.render("index");
})

app.post("/addp",(req,res)=>{
    var myDat = new Pet(req.body);
    myDat.save().then(item => {
    res.render("thankadd"); })
    .catch(err => {
    res.send("not-send"); });
})


app.listen(port,()=>{
    console.log("server is running");
})