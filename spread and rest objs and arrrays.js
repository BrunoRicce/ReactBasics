var array = ['array1', 'array2', 'array3']
var array2 = ['array4']

var allArrays = [...array,...array2]

console.log(allArrays)
//objs
var day = {
  breakfast: 'Pão',
  lunch: 'rice and beans'
}

var night = {
  dinner: 'Pizza'
}

var dia = {...day,...night}

console.log(dia)
//rest
var array3 = ['array1', 'array2', 'array3']

var [first, ...rest] = array3
console.log(first)
console.log(rest)

