
/**
 * 接口路由
 * 引入mysql数据库，请求数据；
 * res.write返回，数据没有经过处理；
 * res.end结束响应并返回携带的数据；
 * res.send返回，数据被处理了， 在请求头中被添加了，context-type 返回类型.
 * res.json返回，就是相当于手动设置了Content-Type: application/json;只是告诉浏览器返回数据类型是json,  并不帮忙转换json格式。 
*/
const express=require('express');
const router=express.Router();
const pathUrl=require('url');
const querystring=require('querystring');

// const mysql=require('mysql');
// const connection =mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'nodeStudy',
//     database:'nodeStudy'
// });
// connection.connect();
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
// if (err) throw err

// console.log('The solution is: ', rows[0].solution)
// });
// connection.end();

router.get('/',(req,res)=>{
    const query=pathUrl.parse(req.url).query;
    console.log(query);
    const queryObj=querystring.parse(query);
    console.log(queryObj);
    res.send('hello express');
})
router.post('/',(req,res)=>{
    console.log(req.body);//需要全局app.use(bodyParser.urlencoded({extended:true}))
    res.send({msg:'post请求成功',data:{},code:1});
})
router.get('/admin',(req,res)=>{

    //写法一：
    // res.write('<h1>hello admin</h1>');
    // res.end();
    //写法二：
    res.send('this is admin');
})
module.exports=router;