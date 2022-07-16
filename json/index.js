const fs = require("fs");
const bioData = {

        name : "ajayrajsinh",
        lang : "nodejs",
        work : "JSON",
};

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) =>{
    console.log("done");
})

fs.readFile("json1.json","utf-8", (err, data) => {
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});

/*const http = require("http");
const url = require("url");
const fs = require("fs");

const server = http.createServer((req, res) => {
    //console.log(req.url);
    //const data = fs.readFileSync(`${__dirname}/json/json1.json`,"utf-8");
   // const objData = JSON.parse(data);

    if(req.url == "/"){
    res.end("hello from the other home ");
    }
    else if(req.url == "/about"){
        res.end("hello from the other about ");
    }
    else if(req.url == "/contact"){
        res.end("hello from the other contact ");
    }
    else if(req.url == "/userapi"){
       // res.end(objData);
       fs.readFile(`${__dirname}/json/json1.json`,"utf-8",(err, data){
        console.log(data);
       });
    }
    else{
        res.writeHead(404, { "content-type" : "text/html" });
        res.end("<h1>404 error found. page doesn't exists.....</h1>");
    }
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the no 8000");
});*/