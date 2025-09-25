function addProperty(obj, key) {
  // your code here
  obj[key]=true
  return obj
}
const myObj ={}
addProperty(myObj, "myProperty")
console.log(myObj.myProperty)