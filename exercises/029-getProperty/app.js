function getProperty(obj, key) {
  // your code here
  return obj[key]
}
const car = {
  model: "Toyota"
}
let output = getProperty(car, "model")
console.log(output)