/**
 * url是一个对象，提供用于处理url格式一类的方法。
 * url.parse()
 * url.format()
 * url.resolve()
*/
const url=require('url');
// console.log(url);
const url1=url.parse('http://www.baidu.com/s/t?name=111&age=22');
console.log(url1);//url对象，含href、path、search、query等

const url2=url.format({protocol:'https',host:'127.0.0.1:555',search:"name=111&age=22"});
console.log(url2);//https://127.0.0.1:555?name=111&age=22

console.log(url.resolve('https://www.baicu.com/','a/b?name=111'));//https://www.baicu.com/a/b?name=111