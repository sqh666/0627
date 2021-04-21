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
        let url1 = req.url.split("?")
        let obQuery = querystring.parse(url1[1])
        console.log(obQuery)
        if(obQuery.submit1 == "Save"){
            fs.writeFile('./savefile',obQuery.name123,(err)=>{
                if(err) console.log("Write file err!")
                else console.log("Write file success!")
            })
        }
        else{
            fs.appendFile('./savefile',obQuery.name123,(err)=>{
                if(err) console.log("Append file err!")
                else console.log("Append file success!")
            })
        }
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