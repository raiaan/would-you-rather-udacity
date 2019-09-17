import {_getUsers , _getQuestions} from '../utils/_DATA'
import { recieveUnansweredQuestions,
    recieveAnsweredQuestions,questions as q} from "./questions";
import {recieveUsers} from './users';

import { showLoading ,hideLoading  } from "react-redux-loading";
import {
    getAnsweredQuestions,
    getUnansweredQuestions
}from '../utils/helpers'
export function handleInitialData(authedUser,users){
    
    return (dispatch)=>{
        dispatch(showLoading())
        _getQuestions().then((questions)=>{
            dispatch(q(questions))
            dispatch(recieveAnsweredQuestions(getAnsweredQuestions(questions,users[authedUser])))
            dispatch(recieveUnansweredQuestions(getUnansweredQuestions(questions,users[authedUser])))
            dispatch(hideLoading())  
        })
    }
}
export function handleInitialUsers(){
    
    //const AUTHED_ID = "johndoe"
    return (dispatch)=>{
        dispatch(showLoading())
        _getUsers().then((users)=>{
       // dispatch(setAuthedUser(AUTHED_ID))
        dispatch(recieveUsers(users))
        dispatch(hideLoading()) 
    })
    }

}