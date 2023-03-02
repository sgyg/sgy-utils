/**
 * js计算精度问题解决实现
 * @param {number} number 需要格式化的数据
 * @param {number} m 规定小数的位数
 * @returns {String} 返回格式后的数据
 * @example 实例 let num = toFixed(12.1, 2)  返回结果 num = 12.10
 */
function toFixed(number: number, m: number) {
  if (typeof number !== "number") {
    throw new ErrorEvent("number不是一个数字")
  }
  // 预留几位则需要先乘10的几次幂，再四舍五入，最后再除以10的几次幂
  let result: string | number =
    Math.round(Math.pow(10, m) * number) / Math.pow(10, m)
  result = String(result)
  // 小数位数补零
  if (result.indexOf(".") == -1) {
    if (m != 0) {
      result += "."
      result += new Array(m + 1).join("0")
    }
  } else {
    let arr = result.split(".")
    if (arr[1].length < m) {
      arr[1] += new Array(m - arr[1].length + 1).join("0")
      result = arr.join(".")
    }
  }
  return result
}

// 实例
let num = toFixed(12.1, 2)
