const express=require('express');
const dbConnect=require('./mongodb1');
const mongodb=require('mongodb')
const app=express();

app.use(express.json())
app.get('/',async (req,res)=>{
    let data=await dbConnect();
    data=await data.find().toArray();
    res.send(data);
});

app.post('/',async (req,res)=>{
 let data=await dbConnect();
 let documents = Array.isArray(req.body) ? req.body : [req.body];
 let result=await data.insertMany(documents);
 res.send(result);
});

app.put('/:name',async (req,res)=>{
    console.log(req.body);
    let data=await dbConnect();
    let result=await data.updateOne(
        {name:req.params.name},
        {$set:req.body}
    );
    res.send({ message: "Update successful", result });
})

app.delete('/:id',async (req,res)=>{
    const data=await dbConnect();
    const result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
   res.send(result);
})
app.listen(5000);