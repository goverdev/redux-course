import { showAlert } from "./action"
import { CREATE_POST } from "./types"

const forbiddenWords = ['php', 'js']

export function forbiddenWordsMiddleware({ dispatch}) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = forbiddenWords.filter(w => action.payload.title.includes(w))
                if (found.length) {
                    return dispatch(showAlert('Spam word'))
                }
            }
            return next(action)
        }
    }
}