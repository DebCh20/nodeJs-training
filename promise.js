let fs= require('fs').promises;

fs.writeFile('./newFolder/file2.txt','some content into file2')
    .then(()=>{
        fs.readFile('./newFolder/file2.txt', 'utf-8')
        .then((data)=>{
            console.log('data : ', data);
            fs.unlink('./newFolder/file2.txt')
            .then(()=>console.log('file deleted'))
            .catch((err)=>console.log(err))
        })
        .catch((err)=>console.log(err))
    })
    .catch((err)=>console.log(err));