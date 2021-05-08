/**
 * 封装公共方法
 */ 
const fs=require('fs');

module.exports={
    //封装文件操作
    read:(url)=>{
        return new Promise((resolve,reject)=>{
            fs.readFile(url,(err,data)=>{
                console.log(data)
                if(!err){
                    resolve(data);
                }else{
                    console.log(err);
                    reject(err);
                }
            })
        });
    }
}