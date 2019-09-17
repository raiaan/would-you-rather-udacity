import React ,{Component} from 'react';
import Question from './questionItem'
class QuestionPage extends Component{
	render(){
		return (
			<Question id ={this.props.match.params.id} details ={true}/>
			
			)
	}
}
export default QuestionPage