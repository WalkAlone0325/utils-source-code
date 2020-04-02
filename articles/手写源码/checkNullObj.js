/**
 * 判断一个对象是否为空对象
 */

function checkNullObj (obj) {
  // Object.keys 用于检测 对象是否具有 key值
  return Object.keys(obj).length === 0
}

console.log(checkNullObj({ name: 'duxing', age: 18 }))