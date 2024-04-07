    const express= require("express"); //using express package
    const app= express();
    const addTwoNumber= (n1,n2) => {
        return n1+n2;
    }
    app.get("/addTwoNumber", (req,res)=>{
        const n1= parseInt(req.query.n1); //supplying n1 param
        const n2=parseInt(req.query.n2); //supplying n2 param
        const result = addTwoNumber(n1,n2);
        res.json({statuscocde:200, data: result }); //sending json response
    });

    app.get("/", (req, res) => {
        const n1 = "<html><body><H1>HELLO THERE </H1></body></html>";
        res.set('Content-Type', 'text/html');
        res.send(Buffer.from(n1));     
    })
    console.log (addTwoNumber(19,12));
    const port=3040;
    app.listen(port,()=> {
        console.log("hello i'm listening to port "+port);
    })