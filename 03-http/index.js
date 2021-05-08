/*
 *node：http 服务端
 *1.服务端使用
 *2.请求对象IncomingMessage类的实例和响应对象ServerResponse类的实例
 */

const http=require('http');
const server=http.createServer((req,res)=>{
    //req是服务器端的请求对象，是http.IncomingMessage函数的实例
    console.log(req instanceof http.IncomingMessage);
    let url = req.url;
    console.log(url);
    // res.statusCode=200;
    res.setHeader('Content-Type','text/plain;charset=UTF-8');
    res.write('hello node');
    res.write(url);
    res.end();
});
//监听的端口，主机，回调
server.listen(8090,'localhost',()=>{
    console.log('localhost:8090')
})