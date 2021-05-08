/**
 * express是node的框架;
 * 相当于服务器+暴露的接口
*/
const express = require('express');
const app=express();//应用对象

//静态文件
const static=express.static('static');
//接口请求body解析
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(static);

/*接口写法一：下面是一个个接口路由 */
// app.get('/',(req,res)=>{
//     res.send('hello express');
// })
// app.get('/admin',(req,res)=>{
//     res.send('this is admin');
// })

/*接口写法二：引入路由文件 */
//app.use(require('./router'));//路由挂到应用对象上；
//或者如下：
app.use('/',require('./router'));

app.listen(3000,(params)=>{
    console.log('服务器已启动');
    console.log(params);
})
