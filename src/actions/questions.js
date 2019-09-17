export const RECIEVE_UNANSWERED_QUESTION = 'RECIEVE_UNANSWERED_QUESTION'
export const RECIEVE_ANSWERED_QUESTION = 'RECIEVE_ANSWERED_QUESTION'
export const RECIEVE_QUESTION = 'RECIEVE_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION ='ADD_QUESTION'
export function recieveUnansweredQuestions(unansweredQuestions){
    return {
        type: RECIEVE_UNANSWERED_QUESTION,
        unansweredQuestions,
    }
}
export function recieveAnsweredQuestions(answeredQuestions){
    return {
        type: RECIEVE_ANSWERED_QUESTION ,
        answeredQuestions,
    }
}
export function questions(questions){
    return {
        type: RECIEVE_QUESTION ,
        questions,
    }
}
export function addQuestion(question){
    return {
        type: ADD_QUESTION ,
        question,
    }
}
export function answerQuestion(qid,answer,authedUser){
    return {
        type :ANSWER_QUESTION,
        id:qid,
        answer,
        authedUser
    }
}

