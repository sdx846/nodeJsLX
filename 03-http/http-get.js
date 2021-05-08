/*
*node：http客户端请求。http.request方法的简化版。
*http.get不需要手动调用req.end()。但是http.request必须。
*/

//node没有安全限制，可跨域
const https = require('https');

https.get('https://plugins.kancloud.cn/api/plugin/info?book=425297&name=theme-default,highlight',res=>{
    let str='';
    res.on('data',chunk=>{
        str+=chunk;
    })
    res.on('end',()=>{
        // console.log(str)
        console.log('http')
    })
});