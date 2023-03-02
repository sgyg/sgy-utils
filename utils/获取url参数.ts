/**
 * 获取url参数
 * @param {string} name 获取url的key
 * @returns {string | boolean} 返回格式后的数据
 * @example 实例 let id = getParamsUrl('id')   返回值id = 111 | false
 */
function getParamsUrl(name: string): Boolean | string {
  const query = window.location.search.substring(1)
  const paramsArr = query.split("&")
  for (let i = 0; i < paramsArr.length; i++) {
    const pair = paramsArr[i].split("=")
    if (pair[0] === name) {
      return pair[1]
    }
  }
  return false
}
