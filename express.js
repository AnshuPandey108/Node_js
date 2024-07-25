const express=require('express');
const app=express();
app.get('',(req,res)=>{
res.send("<h1>Hello this is Home page!..</h1> <a href='about'>Go To About Page</a>")
});

app.get('/about',(req,res)=>{
    res.send(`<input type="text" id="username" name="username" placeholder="Enter your username"> <input type="submit" value="Submit"> <a href='/'>Go To Home Page</a>`)
    });

    app.listen(5000);