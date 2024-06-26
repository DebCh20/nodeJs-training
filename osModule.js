// os (operating System)
var os = require('os');
var url = require('url');
var path = require('path');
var util = require('util');
 
var name="Sachin";
 
var formattedStr = util.format("Welcome %s",name);
 
console.log(formattedStr);
 
var filepath="c://files/file1.txt";
 
var parsedFilePath = path.parse(filepath);
 
console.log(parsedFilePath);
 
console.log(parsedFilePath.base+" "+parsedFilePath.dir);
 
var joinedPath = path.join("c:/","Hello","Hi");
 
console.log(joinedPath);
 
console.log(path.join(__dirname));
 
console.log(path.join(__filename));
 
 
var urlstr = "http://localhost:3000/index.html?fname=Rahul&city=Mumbai";
 
var parsedUrl = url.parse(urlstr,true);
 
console.log(parsedUrl);
 
console.log(urlstr);
 
console.log(parsedUrl.port+" "+parsedUrl.protocol);
 
console.log(parsedUrl.query.fname+" "+parsedUrl.query.city);
 
console.log(os.arch()+" "+os.platform()+" "+os.freemem()+" "+os.hostname());
 
// var cityData = require('./cityModule');
// console.log(cityData);
 
function getSystemUpTime()
{
    return os.uptime()/(60*60);
}
 
console.log(getSystemUpTime()+" hrs");