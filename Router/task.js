const express = require("express");
const Task = require("../Db/Model/Task");
const Router = new express.Router();

Router.get("/tasks", async (req, res) => {
    const task = await Task.find({})
    res.status(200).send(task)
});

Router.post("/tasks", async (req, res) => {
  const task = new Task(req.body);

  try {
    await task.save();
    res.status(201).send(task);
   
  } catch (e) {
    res.status(400).send("task name is already present");
  }

});

Router.delete("/tasks/:id",async (req,res)=>{
  try{

  const task = await Task.findOneAndDelete({_id:req.params.id})
  if(!task){
    res.status(404).send()
  }
  res.status(200).send(task)
  }catch(e){
    res.send(e).status(500)
  }

})

module.exports = Router;
