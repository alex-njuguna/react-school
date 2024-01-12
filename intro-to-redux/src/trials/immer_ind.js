/**Immer is a library that keeps the javascript traditional a well a allow immutability.
 * With Immer, we use the produce function to create a copy of an object or array or data structure and modify it to suit our needs.
 * 
 * npm i immer
 */

import { produce } from "immer";

let book = {title: 'Harry Potter'}

function publish(book) {
    return produce(book, draftBook => {
        draftBook.isPublished = true
    })
}

let updated = publish(book)

console.log(updated) // will return the new modified book

console.log(book) // will return the original book without any mutations