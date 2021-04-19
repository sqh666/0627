const http = require('http')
const fs=require('fs')
const url = require('url')
const querystring = require('querystring')
var i = 0;
const server = http.createServer((req, res) => {
    if(req.url=="/favicon.ico"){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/img');
    fs.readFile("favicon.ico",(err,fsData)=>{
        if(err){
            console.log("Read file error.")
            throw err
        }
        res.write(fsData)
        res.end()
    })
    }
    else if(req.url=="/"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        fs.readFile("form1.html",(err,fsData)=>{
            if(err){
                console.log("Read file error.")
                throw err
            }
            res.write(fsData)
            res.end()
        })
    }
    else if(req.url.slice(0,6)=="/input"){
        res.statusCode = 200;
        let url1 = req.url.split("?");
        //let urlquery = url[1].split("&");
        //let firstQuery = urlquery[0].split("=");
        //let secondQuery = urlquery[1].split("=");
        //let queryData = url.parse(req.url,true).query
        let obQuery = querystring.parse(url1[1])
        res.setHeader('Content-Type', 'text/html'); 
        res.write(obQuery.name123+"<br>");
        res.write(obQuery.submit1+"<br>");  
        res.end("submit success!")
    }
    else{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //res.write(req.url)
    res.write('<h1>This is WZH. You are the '+i+'th visitor</h1>')
    res.end()    
    }
    i++;
    console.log("Welcome")
});
server.listen(3000);