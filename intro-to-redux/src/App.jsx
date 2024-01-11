import { compose, pipe } from 'lodash/fp'

let input = '   JavaScript   '
// let output = `<div>${input.trim()}</div>`

const trim = (str) => str.trim()
const wrapInDiv = (str) => `<div>${str}</div>`
const toLowerCase = (str) => str.toLowerCase()

// const result = wrapInDiv(toLowerCase(trim(input)))

// passing function in referece using compose
const transform = compose(wrapInDiv, toLowerCase, trim)
transform(input)

// passing function in referece using pipe
const transform2 = pipe(trim, toLowerCase, wrapInDiv)
transform2(input)


/*
Pipe unlike compose allows for referencing functions by the order which they will operate from left to right.
Compose the order is right to left 
*/