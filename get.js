let object = { 'a': [{ 'b': { 'c': 3 } }] }
let path = ['g', '0', 'b', 'g'] // 'a[0].b.c'
function get(obj, path, defaultValue) {
  let result = obj
  if (typeof path === 'object') {
    let reg = /[^\[\].]+/g
    path = path.match(reg)
  }
  for(let key of path) {
    result = result[key] ? result[key] : defaultValue
  }
  return result
}
console.log(get(object, 'a[0].b.c', 888))