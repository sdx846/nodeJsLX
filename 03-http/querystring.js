const querystring=require('querystring');
const str=querystring.stringify({name:'kk',age:22});
//序列化对象或者JSON,结果为x=x&y=y
console.log(str);
console.log(querystring.parse(str));
//将对象转为JSON字符串，结果为"{"x":"x","y":"y"}"
const jsonStr=JSON.stringify({name:'kk',age:22});
console.log(jsonStr);