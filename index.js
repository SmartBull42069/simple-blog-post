import express from "express";

const app=express();
const port=3000;
var postList=[];
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))




app.locals.list=postList;


app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.listen(port)
app.post("/submit",(req,res)=>{
  var title=req.body.title;
  var textArea=req.body.textArea;
  postList.push({
    [title]:textArea,
  })
  res.render("index.ejs");
  
})
app.post("/delete", (req, res) => {
  var postIndex=req.body.delete;
  postList.splice(postIndex,1)
  res.redirect("/")
});

app.post("/cancel",(req,res)=>{
  res.render("index.ejs");
})

app.post("/change",(req,res)=>{
  var title=req.body.title;
  var textArea=req.body.textArea;
  var postIndex=req.body.save;
  postList.splice(postIndex,1,{[title]:textArea})
  res.render("index.ejs");
})