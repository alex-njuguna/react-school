import * as actions from './actionTypes'

export function addBug(decription) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: decription
        }
    }
}

export function removeBug(id) {
    return {
        type: actions.BUG_REMOVED,
        payload: {
            id: id
     }
    }
}

export function resolveBug(id) {
    return {
        type: actions.BUG_RESOLVED,
        payload: {
            id: id
        }
    }
}