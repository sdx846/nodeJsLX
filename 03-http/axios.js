/*
*node客户端请求。axios是第三方模块，需要安装。
*/

const axios=require('axios');
axios.get('https://plugins.kancloud.cn/api/plugin/info?book=425297&name=theme-default,highlight')
.then(res=>{
    // console.log(res.data)
    console.log('axios')
})
.catch(err=>{
    console.log(err)
})