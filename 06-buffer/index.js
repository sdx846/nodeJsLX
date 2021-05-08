/**
 * Buffer 对象用于表示固定长度的字节序列。
 * Buffer 类在全局作用域中，因此无需使用 require('buffer').Buffer。
 * nodejs不支持GB2312,默认utf8编码。
 * 第一个参数是字符串，第二个是字符串编码。
 * 一个汉字3个字节。
 * 传入一个数组，数组的每一项会以十六进制存储为buffer的每一项。
 * Buffer.from([]).toString()可以得到最初的字符串，toString中默认是toString('utf8')。
 */
const buf1=Buffer.from('hello','utf8');
console.log(buf1);//5个字节<Buffer 68 65 6c 6c 6f>

const buf2=Buffer.from("字节");
console.log(buf2);//6个字节<Buffer e5 ad 97 e8 8a 82>。

const buf3=Buffer.from(buf2);
console.log(buf3);//值同buf2
console.log(buf2===buf3);//false

console.log(Buffer.from([1,2,3]));//<Buffer 01 02 03>
console.log(Buffer.from([0xe5,0xad,0x97,0xe8,0x8a,0x82]).toString());//字节

//alloc,类似与数组的用法
const buf4=Buffer.alloc(6);//占6个字节的位置
// buf4.fill(1); //用1填充，<Buffer 01 01 01 01 01 01>
// buf4.fill(1,2); //用1从下标2开始填充，<Buffer 00 00 01 01 01 01>
//buf4.fill(1,2,5); //用1从下标2开始填充,到下标5结束，不包括下标5，<Buffer 00 00 01 01 01 00>
buf4.fill('里');//一个汉字3个字节，6个字节有两个汉字，<Buffer e9 87 8c e9 87 8c>
console.log(buf4.toString());//里里
console.log(buf4);

//slice
const buf5=Buffer.from('hello');
console.log(buf5);//<Buffer 68 65 6c 6c 6f>
const a=buf5.slice(0,2);
console.log(a);//<Buffer 68 65>
console.log(a.toString());//he

//indexOf
const buf6=Buffer.alloc(6);
buf6.fill('李莉丽');
console.log(buf6.indexOf('莉'));//3
console.log(buf6.indexOf('李'));//0
console.log(buf6.indexOf('丽'));//-1
console.log(buf6.slice(3,6).toString());//莉

//copy



