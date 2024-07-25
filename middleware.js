const express = require('express');
const reqFilter=require('./middleware1');
const app = express();
const route=express.Router();
route.use(reqFilter);
// app.use(reqFilter);
app.get('/', (req, res) => {
    res.send("Welcome to Home Page!..");
})
route.get('/users',(req, res) => {
    res.send("Welcome to Users Page!..");
})
route.get('/about', (req, res) => {
    res.send("Welcome to About Page!..");
})
app.get('/contact', (req, res) => {
    res.send("Welcome to Contact Page!..");
})

app.use('/',route);
app.listen(5000);