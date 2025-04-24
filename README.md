CommonJS规范
笔记：无论如何修改导出对象，最终导出的都是module.exports的值

全局安装browserify     （指令：npm i browserify -g）
因为node.js默认支持CommonJS，但浏览器不支持

ES6规范
笔记：
node中运行ES6模块有两种方式：改成‘mjs’文件，或者添加package.json，将type设置成module

分别导出：每个分支前写export ……（const,function……）
统一导出：分支前不加export，后面export{}里头装需要导出的内容（注意，这时候大括号里头装的不是对象）
默认导出：export default{}，大括号里头装需要导出的内容
以上方法可以混用

导入全部（通用）：如 import * as school from "./school.js";
命名导入：如import {name} from "./school.js"; 大括号里头装需要导入的内容，可以'name as xxx'修改命名（注：适用分别导出，统一导出）
动态导入：
