// fs-async
const {readFile,writeFile}=require('fs');
readFile('./tutorial/content/first.txt','utf8',(err,data)=>{
    if(err)
    {
        console.log(err);
         return;
    };
    // console.log(data);
    first=data;
    readFile('./tutorial/content/second.txt','utf8',(err,data)=>{
       if(err)
       {
        console.log(err);
        return;
       }
       else
       second=data;
       writeFile('./tutorial/content/result-async.txt',`here is the result:${first} and ${second}`,(err,data)=>{
        if(err)
        {
           console.log(err);
           return;
        }
       })
    })
})
// we can also use promises or async await instead of callback hell to implement above code 