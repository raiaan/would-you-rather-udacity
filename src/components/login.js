import React from 'react';
import { connect } from "react-redux";
import {setAuthedUser} from '../actions/authedUser'
import {handleInitialUsers,handleInitialData} from '../actions/shared'
import {Redirect} from 'react-router-dom'
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            authedId :'',
            isLogged:false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit=()=>{
        if(this.state.authedId)
            {   
                this.props.dispatch(setAuthedUser(this.state.authedId))
                this.setState({
                   isLogged:true
                })
            }
        else alert('please seelect a user')
    }
    handleChange=(e)=>{
        const{dispatch , users} = this.props
        this.setState({
            authedId: e.target.value
        })
        dispatch(handleInitialData(e.target.value,users))
    }
    componentDidMount(){
        this.props.dispatch(handleInitialUsers())
    }
    render(){
        if(this.state.isLogged && this.props.location.state.backLink){
            if(this.props.location.state.backLink ==='unanswered')
                return <Redirect to='/'/>
            return <Redirect to={this.props.location.state.backLink}/>
            
        }else if(this.state.isLogged){
            return <Redirect to='/'/>
        }
        return (
            <div className='add-question'>
            <select onChange={this.handleChange} defaultValue="">
                <option key = '0' value= ""disabled>select user</option>
            {this.props.users ===null ? null :
                Object.keys(this.props.users).map((userID)=>
                    <option key = {userID} value={userID}>{this.props.users[userID].name}</option>
                )
            }
            </select>
            <input type="submit" value="login" onClick={this.handleSubmit}/>
          </div>
        );
    }
}
function mapStateToProps({users,questions}){
    return{
        users,
        questions,
    } 
}
export default connect(mapStateToProps)(Login);