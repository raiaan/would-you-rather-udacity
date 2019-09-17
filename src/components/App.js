import React from 'react';
import { NavBar } from "./nav";
import  Unanswered  from "./unanswered";
import Answered from './answered';
import Add from './add'
import QuestionPage from "./questionDetail";
import {connect} from 'react-redux'
import { BrowserRouter as Router, Route ,Redirect} from 'react-router-dom'
import LoadingBar from "react-redux-loading";
import Login from './login'
class App extends React.Component {
	render(){
    const {authedUser} = this.props
    
		return (
      <Router >
          <div className='container'>
           {
             authedUser? <NavBar username = {this.props.users[authedUser]['name']}/>:null
           } 
          <LoadingBar />
            
             <div>
              <Route path='/' exact 
              render={()=>(authedUser ?<Unanswered />:
                      <Redirect to={{
                        pathname: '/login',
                        state: { backLink: 'unanswered' }
                      }}/>) }  />
              <Route path='/question/:id'
                     render={(props)=>(authedUser? <QuestionPage {...props}/>:
                      <Redirect to={{
                        pathname: '/login',
                        state: { backLink: '/question/'+props.match.params.id }
                      }}/>) }  />
                     
              <Route path='/answered' render={()=>(authedUser? <Answered />:
                      <Redirect to={{
                        pathname: '/login',
                        state: { backLink: '/answered' }
                      }} />
                     )} />
              <Route path='/add'  render={()=>(authedUser? <Add />:
                     <Redirect to={{
                      pathname: '/login',
                      state: { backLink: '/add' }
                    }} /> 
                     )} />
              <Route path='/login' component={Login} />
            </div>
              
          </div>
      </Router>
    );
	}
  
}
function mapStateToProps({authedUser,users}){
    return{
        authedUser,
        users
    } 
}
export default connect(mapStateToProps)(App);
