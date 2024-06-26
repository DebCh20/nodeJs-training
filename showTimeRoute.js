const http= require('http');
const port=3000;

const server=http.createServer((req, res)=>{
    let reqUrl= req.url;
    if(reqUrl==='/')
    {
      res.end('<h1>Welcome to my app</h1>')
    }
    else if(reqUrl==='/date'){
        res.end(`<h1>Today's date is 26-06-2024</h1>`)
    }
    else if(reqUrl==='/time'){
        let currentTime = new Date();
  
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        res.end(`<h1>Today's date is ${hours}:${minutes}:${seconds}</h1>`)
    }
    else{
       res.write("hello");
    }
});

server.listen(port,()=>{
    console.log('server listening on port:',3000);
})