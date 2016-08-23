// require('./main2.js');//webpack支持AMD的模块化规范，会自动打包一些模块
import '../css/main.css';  //使用es6的模块化导入操作
//require('../css/main.css');
import '../font/mvboli.ttf';

require('../css/main.less');
alert("this is main.js!");

let name = "肖果平";
console.log(name);