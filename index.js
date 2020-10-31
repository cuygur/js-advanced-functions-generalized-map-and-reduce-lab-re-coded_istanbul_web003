// Add your functions here
const map = (arr, func) => {
  const result = []
  for (let element of arr) {
    result.push(func(element))
  }
  return result
}

const reduce = (array, func, start) => {
  if (!!start == false) {
    start = array.shift()
  }
  return array.reduce(func, start)
}
