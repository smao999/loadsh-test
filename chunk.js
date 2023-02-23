// import _ from 'lodash'
// https://github1s.com/lodash/lodash/blob/HEAD/chunk.js

// chunk

function _chunk(arr, value){
  let re = []
  let b = arr
  while (b.length > value) {
    let a = []
    a = b.slice(0, value)
    re.push(a)
    b = b.slice(value, b.length)
  }
  re.push(b)
  return re
}

let arr1 = [1,2,3,4,5]
let c = _chunk(arr1,1)
// console.log(c);

function chunk (arr, size = 1) {
  let result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}
console.log(chunk(arr1, 2));