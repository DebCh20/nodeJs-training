let add= (n1,...n2)=>{
   let sum= n1;
   n2.forEach((elem)=>sum=sum+elem)
   return sum;
}

let mul= (n1,...n2)=>{
  let mul= n1;
   n2.forEach((elem)=>mul=mul*elem)
   return mul;
}

let div= (n1,n2)=>{
   return n1/n2;
}

let sub= (n1,n2)=>{
   return n1-n2;
}

module.exports= {add, mul, div, sub}