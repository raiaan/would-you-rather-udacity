import React from 'react';
import { _saveQuestion } from "../utils/_DATA";
import { connect } from "react-redux";
import {addQuestion} from '../actions/questions'
class Add extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            optionOneText: '',
            optionTwoText: '',
            author : this.props.author
        };

        this.handleOptionOneText = this.handleOptionOneText.bind(this);
        this.handleOptionTwoText = this.handleOptionTwoText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleOptionOneText = (e)=>{
        this.setState({
            optionOneText: e.target.value
        })

    }
    handleOptionTwoText = (e)=>{
        this.setState({
            optionTwoText: e.target.value
        })
    }
    handleSubmit = (e)=>{
        alert('A question has been added: ' + this.state.optionTwoText);
        e.preventDefault();
        _saveQuestion({
            optionOneText:this.state.optionOneText,
            optionTwoText: this.state.optionTwoText,
            author: this.state.author
        }).then((res)=>this.props.dispatch(addQuestion(res)))
    }
    render(){
        return (
          <form onSubmit={this.handleSubmit} className="add-question">
            <div>
             <textarea
                type="text"
                value={this.state.optionOneText}
                onChange={this.handleOptionOneText}
                placeholder = 'Option one'
              />
            </div>
            <div>
              <textarea
                type="text"
                value={this.state.optionTwoText}
                onChange={this.handleOptionTwoText}
                placeholder = 'Option Two'
              />
            </div>
            <input type="submit" value="Submit" />
          </form>
        );
    }
}
function mapStateToProps({authedUser}){
    return{
        author:authedUser   
    } 
}
export default connect(mapStateToProps)(Add)