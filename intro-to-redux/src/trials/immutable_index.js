import { Map } from 'immutable'

let book = Map({title: 'Harry Potter'})

function publish(book) {
    return book.set('isPublished', true)
}

book = publish(book)

console.log(book.toJS())

/*
* Immutable brings a new api into play with functionality such as set, toJS etc
* npm i immutable
*/