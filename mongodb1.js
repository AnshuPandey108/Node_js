const {MongoClient} = require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const database='e_com';
async function dbConnect()
{
    
    let result=await client.connect();
    let db=result.db(database);
    return db.collection('product');
  
}

module.exports=dbConnect;