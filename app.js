const express = require('express');
const bodyParser = require('body-parser');
const date=require(__dirname+"/date.js");

const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set('view engine','ejs');

const items=[];
const workitems=[];

app.get("/",function(req,res){
  const day=date.getDate();
  console.log(day);
  res.render("list",{listTitle:day,newItem:items});
});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",newItem:workitems});
});

app.listen(3000,function(){
  console.log("yay :3000 ");
})

app.post("/work",function(req,resp){
  var item=req.body.newItem;
  console.log(item);
  workitems.push(item);
  resp.redirect("/work");
});

app.post("/",function(req,resp){
  var item=req.body.newItem;
  if(req.body.list=="Work"){
    workitems.push(item);
    resp.redirect("/work");
  }
  else{
    items.push(item);
    resp.redirect("/");
  }
  console.log(item);

});
app.get("/about",function(req,resp){
  resp.render("about");
});
