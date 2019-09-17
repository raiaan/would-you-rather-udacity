export function getUnansweredQuestions(questions,authedUser){
        const unansweredIds =  Object.keys(authedUser['answers'])
        const unanswered = Object.keys(questions)
            .filter(key =>! unansweredIds.includes(key))
        return unanswered        
}
export function getAnsweredQuestions(questions,authedUser){
    const unansweredIds =  Object.keys(authedUser['answers'])
    const unanswered = Object.keys(questions)
        .filter(key => unansweredIds.includes(key))
    return unanswered        
}
export function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp);
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min  ;
    return time;
  }
