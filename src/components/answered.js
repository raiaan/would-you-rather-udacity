import React ,{ Component } from 'react';
import { connect } from "react-redux";
import Question  from "./questionItem";
class Answered extends Component{
	render(){
		return (
			<div>
				<ul>
				{this.props.questionsIds.map(
						(id)=>(
							<li key ={id}> <Question id = {id} /></li>
						)
					)}
				</ul>
			</div>
			)
	}
}
function mapStateToProps({answeredQuestions,questions}){
    return{
        questionsIds :answeredQuestions.sort(
            (a,b)=>questions[b].timestamp - questions[a].timestamp 
		),
    } 
}
export default connect(mapStateToProps)(Answered)