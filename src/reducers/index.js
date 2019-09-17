import {combineReducers} from 'redux'
import  {questions,unansweredQuestions,answeredQuestions}  from './questions'
import  users  from './users'
import authedUser  from './authed'
import { loadingBarReducer} from 'react-redux-loading'
export default combineReducers({
    questions,
    unansweredQuestions,
    answeredQuestions,
    users,
    authedUser,
    loadingBar:loadingBarReducer
})