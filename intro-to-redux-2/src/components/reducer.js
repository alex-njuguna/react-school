/*
*reducer function to update state 
*/

let lastId = 0

/*
* check action type
* if action type is bugAdded, copy all the initial data into a list and then add the new bug(id, description and resolved status)
* if action type is bugRemoved, get all the data from state and filter the one whose id is passed to be removed
* else return state as is
*/
function reducer(state = [], action) {
    if (action.type === 'bugAdded') {
        return [
            ...state, {
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ]
    } else if (action.type === 'bugRemoved') {
        return state.filter((bug) => bug.id !== action.payload.id)
    }
    return state
}