/**
 * 将浮点数点左边的数每三位添加一个逗号，如 12000000.11 转化为『12,000,000.11』
 */
function format(number) {
  return number && number.String().replace(/(?!^)(?=(\d{3})+\.)/g, ',')
}
format(1223123546113)