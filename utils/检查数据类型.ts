/**
 * @param {any} type 需要检查数据类型的值
 * @returns {any} 返回值的数据类型
 * @example let vType = getType({})   返回结果 vType = object
 */
function getType(type: any) {
  const originType = Object.prototype.toString.call(type)
  const specificType = originType.slice(8, -1)
  return specificType.toLowerCase()
}
