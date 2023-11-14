import { code } from './input'

//? Operators table
const operators = {
    '#': (op) => op + 1,
    '@': (op) => op - 1,
    '*': (op) => op * op,
    '&': (op) => op,
}

function compiler(code) {
    let value = 0
    let compiledCode = ''
    for (const char of code) {
        if (char === '&') {
            compiledCode += value
        } else {
            value = operators[char](value)
        }
    }
    return compiledCode
}
console.log(compiler(code))
