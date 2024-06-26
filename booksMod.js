const http= require('http');
const fs=require('fs').promises;
const port=3000;

let books=[
    {'bookName':"Silent Patient", 'price': 300},
    {'bookName':"Forest of enchantment", 'price': 400},
    {'bookName':"Dark Matter", 'price': 700}
]

let fileData='';
fs.readFile('./newFolder/file1.txt', 'utf-8')
.then((data)=>fileData=data)
.catch((err)=>console.log(err));


let server= http.createServer((req,res)=>{
    res.writeHead(200, {'content-type':"text/html"});
    res.write(req.url);
    let urlStr= req.url;
    if(urlStr=='/'){
    res.write('<table style=>');
    res.write(`<th>Name</th>
      <th>Price</th>
    `);
    for(let book of books){
        res.write(`<tr><td>${book.bookName}</td><td>${book.price}</td></tr>`)
    }
    res.write('</table>');
    res.write(`<h2 style="margin-top:20px">${fileData}</h2>`);
    res.end();
   }
   else if(urlStr=='/employees'){
     res.end("<h1>Employees</h1>");
   }
   else{
     res.end()
   } 
})

server.listen(port,()=>{
    console.log('server listening on port:',3000);
})