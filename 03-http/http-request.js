/*
 *node：http客户端请求。http是node内置。
 *1.客户端的使用request/get
 *2.请求对象ClientRequest类的实例和响应对象IncomingMessage类的实例
 */

const http = require("http");
const querystring=require('querystring');
const postData=querystring.stringify({
    "content":"内容",
    "format":"fs"
});
//www.lezijie.com 可以看到html
//www.oschina.net 做了安全机制，301
//www.qq.com 做了安全机制，post报307或get报302
/*浏览器发送请求到服务器，服务器要求浏览器重新发送请求到一个重定向的地址，由重定向地址返回资源。浏览器会自动重新发送请求，但是爬虫不会，这就是一层防爬虫机制。*/
const options = { 
    hostname: "www.baidu.com", //相当于服务器地址
    port: 80, 
    method: "get",
    headers:{
        "accept":"*/*",
        "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8;",
        "Content-Length":postData.length,
        "Cookie":"",
        "Referer":""
    },
};
//req是客户端的请求对象+res是客户端的响应对象
const req = http.request(options, (res) => {
//   res.on("data", (chunk) => {
//     //打印www.lezijie.com的html
//     console.log(chunk.toString());
//   });
});
//req是客户端请求实例
console.log(req instanceof http.ClientRequest);

req.on("error", (err) => {
  console.log(err.message);
});
//客户端监听响应。相当于上面http.request的回调。
res.on('response',(res)=>{
    console.log(res.statusCode);
    console.log(res.httpVersion);
    console.log(res.headers);
    // console.log(res.trailers);//http请求尾，不常见
    // res.setEncoding("utf-8");
    res.on('data',chunk=>{
        console.log(chunk.toString());
    })
    console.log(res.statusCode);
});
//将数据写入请求
req.write(postData);
req.end();
