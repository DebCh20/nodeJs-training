const http= require('http');
const port=3000;

products = [
    {"productId":101,"productName":"Samsung Mobile","productCost":15000},
    {"productId":102,"productName":"Motorola Mobile","productCost":25000},
    {"productId":103,"productName":"Iphone Mobile","productCost":35000}
]

const server=http.createServer((req, res)=>{
    res.writeHead(200, {'content-type':"text/html"})
    res.write('<h1 style="color:teal">Hello from the other side</h1>');
    res.write(`
        <table>
           <th>Id<th><th>Name</th><th>Cost</th>
    `);
    res.write(`
        <tr>
        </tr>
    `)
    res.write(JSON.stringify(products));
    res.end();
});

server.listen(port,()=>{
    console.log('server listening on port:',3000);
})