/**
 * 获取cookie值
 * @param {*} name 
 */
function getCookie (name) {
  var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
  if (arr != null) return unescape(arr[2]);
  return null;
}