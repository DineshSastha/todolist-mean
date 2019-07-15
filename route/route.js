var express = require('express');
var mongoose = require('mongoose');

const router=express.Router();
const todo= require('../models/todoList.js');


router.get('/getList',(req,res,next)=>
{
    todo.find(function(err,todoList){
if(err){
   console.log("Retrieving todoList is unsuccessful");
}
    else{
        res.json(todoList);
        console.log("Retrieving todoList is successful");
    }
    })
});


router.post('/todoList',(req,res,next)=>{
    
    todo.create(req.body,function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

});

router.get('/getList/:id',(req,res,next)=>{
    
    todo.findOne({_id:req.params.id},function(err,todoList)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(todoList);
        }
    })

});

router.put('/:id',(req,res,next)=>{
    
    todo.updateOne({_id:req.params.id},req.body,function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

});

router.delete('/:id',(req,res,next)=>{
    
    todo.deleteOne({_id:req.params.id},function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    })

});

module.exports = router;