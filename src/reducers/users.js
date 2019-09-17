import {RECIEVE_USERS } from '../actions/users'
import { ANSWER_QUESTION,ADD_QUESTION } from '../actions/questions'

export default function users (state = {},action){
    switch (action.type){
        case RECIEVE_USERS : 
            return {
                ...state ,
                ...action.users
            }
        case ANSWER_QUESTION:{
            state[action.authedUser]['answers'][action.id] = action.answer
            return state
        }
        case ADD_QUESTION:
            {
                 state[action.question.author]['questions'].push(action.question.id)
                return state
                }
        default : return state
    }
}