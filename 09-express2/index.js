const express=require('express');
const app=express();
const util=require('./utils');

app.get('/',(req,resp)=>{
    util.read('./09-express2/pages/01.html')
    .then(res=>{
        resp.write(res);
        resp.end();
    })
})

app.get('/ad',async (req,res)=>{
    const data=await util.read('./09-express2/pages/02.html');
    res.end(data);
})

app.listen(3000,()=>{
    console.log('server is start , port 3000')
})