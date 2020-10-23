const express = require("express");
const {Ob} = require("mongoose");
const empmodel = require("../db/model/employeemodel");

const router = express.Router()

router.post("/",async (req,res,next)=>{
    try{
    const emp = new empmodel(req.body);
    const result =  await emp.save();
    res.status(201).send(result);
    }
    catch(err)
    {
      next(err);
    }

});

router.get("/",async (req,res,next)=>{
    try{
     const emps = await empmodel.find({})
    res.status(200).send(emps);
    }
    catch(err)
    {
      next(err);
    }

})

router.get("/:id",async (req,res,next)=>{
    try{
    const emp = await empmodel.find({_id:req.params.id});
    res.status(200).send(emp);
    }
    catch(err)
    {
      next(err);
    }

})

router.patch("/:id",async (req,res,next)=>{
    try{
        
    const emp = await empmodel.findOneAndUpdate({_id:req.params.id},req.body,{new: true});
    res.status(200).send(emp);
}
catch(err)
{
  next(err);
}
})

router.delete("/:id",async (req,res,next)=>{
    try{
    const result = await empmodel.findByIdAndDelete({_id:req.params.id})
    res.status(200).send(result);
}
catch(err)
{
  next(err);
}
})

module.exports = router;

