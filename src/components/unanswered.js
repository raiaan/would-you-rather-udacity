import React ,{ Component } from 'react';
import { connect } from "react-redux";
import Question  from "./questionItem";

class Unanswered extends Component{
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
function mapStateToProps({unansweredQuestions,questions}){
    return{
		questionsIds :unansweredQuestions.sort(
            (a,b)=>questions[b].timestamp - questions[a].timestamp 
		),
    } 
}
export default connect(mapStateToProps)(Unanswered)