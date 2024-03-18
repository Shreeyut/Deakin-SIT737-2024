var express = require("express") //using express package
var app = express()
var port = process.env.port || 3000; //using port number 3000
app.listen(port,()=>{
console.log("App listening to: "+port)
})