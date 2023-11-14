import { text } from './input.js'
function analyzeText(textToAnalyze) {
    //!Validation for null or undefined text to analyze
    if (textToAnalyze === null || textToAnalyze === undefined) {
        throw new Error('Input invalido: textToAnalyze es null o undefined')
    }

    //!Validation for string input
    if (typeof textToAnalyze !== 'string') {
        throw new Error('El input debe ser un String')
        // or return a default value
        // return '';
    }

    const listAppearances = textToAnalyze.match(/\b\w+\b/g).reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1
        return acc
    }, {})

    return Object.entries(listAppearances)
        .map(([key, value]) => `${key}${value}`)
        .join('')
}

console.log(analyzeText(text))
