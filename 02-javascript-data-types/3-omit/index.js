/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
  const newArr = { ...obj }
  const newObj = {}
  const arg = [...fields]

  for (let key in newArr) {
    if (arg.includes(key)) {
      delete newArr[key]
    }
  }
  return newArr
}
