//path是node自带的对象
const path=require('path');

//将不符合正常写法的路径格式化
console.log(path.normalize('/f/b//z/as/s/..'));//最后/..跳到了上一级，所以结果是\f\b\z\as 
//将多个路径处理成1个
console.log(path.join('///f','b','/c/d'));//结果\f\b\c\d
//路径分隔符 path.sep即\
console.log(path.sep);
console.log('f\s\a'.split(path.sep));
//当前文件所在的物理路径
console.log(__dirname);
//路径巡航(相当于不断调用系统的cd命令)：当前文件所在的物理路径的上一级目录的上一级
console.log(path.resolve(__dirname,'../','../'));
//获取路径所在文件夹名称
console.log(path.dirname('./a/b/c'));//./a/b
//获取文件名称(返回结果可排除[ext]后缀字符串)
console.log(path.basename('/f/a/x.html'));//x.html
console.log(path.basename('/f/a/x.html','.html'));//x
//获取文件扩展名
console.log(path.extname('index.html'));//'.html'
console.log(path.extname('index.'));//'.'
console.log(path.extname('index'));//''




