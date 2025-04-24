const {name,slogan,getTel}=require('./school.js');//解构
const {name:stu,motto,getTel:stuTel}= require('./students.js');//解决命名冲突

console.log(name);
console.log(slogan);
console.log(getTel());

console.log(stu);
console.log(motto);
console.log(stuTel());