function fn() {}
fn.call(null);
fn.__proto__ === Function.prototype;
new fn();

Object.__proto__ === Function.prototype;
Function.__proto__ === Function.prototype;

Function.prototype.__proto__ === Object.prototype;
Object.prototype.__proto__ === null;

new Function();
