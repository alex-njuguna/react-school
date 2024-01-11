/**
 * when using pipe from lodash, it becomes difficult to reference with functions with multiple parameters
 * Currying finds a way throught this by passing a single parameter and then adding another function into the 'host' function
 */

function add(a) {
    return function(b) {
        return a + b
    }
}

const add2 = (a) => (b) => a + b

add(a)(b)