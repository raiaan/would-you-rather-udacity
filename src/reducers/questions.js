import {
    RECIEVE_UNANSWERED_QUESTION,
    RECIEVE_ANSWERED_QUESTION,
    RECIEVE_QUESTION,
    ANSWER_QUESTION,
    ADD_QUESTION
    } from '../actions/questions'

export function unansweredQuestions (state = [],action){
    switch (action.type){
        case RECIEVE_UNANSWERED_QUESTION : 
            return action.unansweredQuestions
        case ANSWER_QUESTION:
            return state.filter((item)=> item !== action.id) 
        case ADD_QUESTION:
            return state.concat(action.question.id)
            
        default : return state
    }
}
export function questions (state = {},action){
    switch (action.type){
        case RECIEVE_QUESTION : 
            return {
                ...state ,
                ...action.questions
            }
        case ANSWER_QUESTION:
            {
                state[action.id][action.answer].votes.push(action.authedUser)
                return state
            }
        case ADD_QUESTION:
             { 
                 state[action.question.id]= action.question
                 return state
            }

        default : return state
    }
}
export function answeredQuestions (state = [],action){
    switch (action.type){
        case RECIEVE_ANSWERED_QUESTION : 
            return action.answeredQuestions
        case ANSWER_QUESTION :
            return state.concat(action.id)
        default : return state
    }
}