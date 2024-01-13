import * as actions from './actionTypes'

export function addBug(decription) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: decription
        }
    }
}