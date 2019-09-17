import React ,{Component} from 'react';
import Question from './questionItem'
class QuestionPage extends Component{
	render(){
		return (
			<div>
				<h1>Would You Rather</h1>
				<Question id ={this.props.match.params.id} details ={true}/>
			</div>
			
			)
	}
}

export default QuestionPage