let result=+prompt('Введите значение')

console.log(result)
console.log(typeof result)

if (typeof result !== 'number') {
 console.log ('Упс, кажется, вы ошиблись')
} else if (isNaN(result)) {
 console.log('Not a number')
} else if (result % 2 === 0) {
 console.log('Число четное')
} else {
 console.log ('Нечетное число')
}