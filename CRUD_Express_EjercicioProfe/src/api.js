const express = require('express');
const service = express();
const puerto = 3000;

service.post('/', (req,resp)=>{
    resp.send("Response activate");
    console.log(req);
})

service.get('/', (req,resp)=>{
    resp.send("Response activate");
    console.log(req.query);
})

service.put('/', (req,resp)=>{
    resp.send("Response activate");
    console.log(req);
})

service.delete('/', (req,resp)=>{
    resp.send("Response activate");
    console.log(req);
})


service.listen(puerto, () => console.log("Servicio activado"));