const path = require("path");
console.log(path.dirname("D:\node js"));
console.log(path.extname("D:\node js"));
console.log(path.basename("D:\node js"));
const mypath = path.parse("D:\node js");
console.log(mypath.name);
