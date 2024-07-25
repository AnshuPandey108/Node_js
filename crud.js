const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'crud')
const filepath=`${dirpath}/apple.txt`;
fs.writeFileSync(filepath,'This is a simple text file!..');
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item);
})
fs.appendFile(filepath,'and file name is apple.txt',(err)=>{
    if(!err) console.log("File is Updated");
});
fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if(!err) console.log("File Renamed")
})

// fs.unlinkSync(`${dirpath}/fruit.txt`);