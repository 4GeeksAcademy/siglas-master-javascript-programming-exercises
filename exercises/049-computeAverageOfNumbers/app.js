// Write your function here
function computeAverageOfNumbers(input){
    if (input.length==0) return 0
    let total = 0
    for(let item of input){
        total += item
    }
    return total/input.length
}
let output = computeAverageOfNumbers([1,2,3,4,5])
console.log(output)