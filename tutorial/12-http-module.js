const http=require('http');
const server= http.createServer((req,res)=>{
    if(req.url==='/')
    {
        // res.write('welcome to my home page')
        // res.end();
        res.end('welcome to my home page')
    }
    if(req.url ==='/about')
    {
        res.end('Here is our short history')
    }
    res.end(`<h1>OOPs we cannot load the page you requested</h1>
    <a href="/">back home</a>`);
    // in web browser write localhost:3000/error to view about message
})
server.listen(3000);