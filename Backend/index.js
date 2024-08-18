const express = require("express");
const cors = require("cors");
require('./connection')

const app = new express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
//Write missing code here
const BlogModel=require('./model')

//Write your POST API here
app.post('/post',async(req,res)=>{
  try{
    var item=req.body;
    const data_add=new BlogModel(item);
    const data=await data_add.save();
    res.send('Post done')
  }catch(err){
    console.log(err)
  }
})

app.get("/get", async (req, res) => {
  try {
    let data = await BlogModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.delete("/delete/:id",async(req,res)=>{
  try{
    const data=await BlogModel.findByIdAndDelete(req.params.id)
    res.send('Delete done')
  }catch(err){
    console.log(err)
  }
})
app.put("/update/:id",async(req,res)=>{
  try{
    const data=await BlogModel.findByIdAndUpdate(req.params.id,req.body)
    res.send('Update done')
  }catch(err){
    console.log(err)
  }
})

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
