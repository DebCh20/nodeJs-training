const fs= require('fs');

// fs.mkdirSync('newFolder');

// let content="new file created"

// fs.writeFile('./newFolder/file1.txt',content, err=>{
//   if(err)
//   console.log("error");
//   else
//   console.log('successful');
// })

// fs.readFile('./newFolder/file1.txt', 'utf-8',(err, data)=>{
//   if(err)
//   console.log("error");
//   else
//   console.log("success and data",data);
// })

// let content = "new content";
// fs.appendFile('./newFolder/file1.txt', content, ()=>{});

fs.mkdir('dir2', err=>{
  if(err)
  console.log("no dir made");
  else{
     fs.writeFile('./dir2/newFile.txt',"some data", err=>{
      if(err)
        console.log("no file made");
      else{
        fs.readFile('./dir2/newFile.txt', 'utf-8', (err, data)=>{
          if(err)
           console.log("no file read");
          else{
             console.log(data);
             fs.unlink('./dir2/newFile.txt', err=>{
              if(err)
                console.log("no file made");
             });
          } 
        })
      }  
     })
  }
})