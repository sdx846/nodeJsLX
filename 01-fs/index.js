const fs=require('fs');
//flag项非必填。值：r代表读取文件，w代表写文件，a代表追加。
fs.writeFile('./01-fs/dist/log.txt','写入内容111',{flag:'a'},(err,data)=>{
    if(err){
        console.log('文件创建出错了')
    }else{
        console.log('文件创建成功,并写入内容');
        fs.readFile('./01-fs/dist/log.txt','utf-8',(err,data)=>{
            console.log(data.toString())
        })
    }
})

//创建目录;如果目录存在会报错；
// fs.mkdir('./01-fs/test',err=>{
//     if(err){
//         throw err;
//     }
//     console.log('创建目录成功')
// })
//删除目录可以用fs.rmdir(path,callback)，但是只能删除空目录。

//读取目录
fs.readdir('./01-fs/dist',(err,files)=>{
    if(err){
        throw err;
    }
    console.log(files);//[ 'log.txt' ]
})