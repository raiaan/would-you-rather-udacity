import React from 'react';
import { NavBar } from "./nav";
import  Unanswered  from "./unanswered"; 
import Answered from './answered';
import Add from './add'
import QuestionPage from "./questionDetail";
import {connect} from 'react-redux'
import { BrowserRouter as Router,Switch, Route ,Redirect} from 'react-router-dom'
import LoadingBar from "react-redux-loading";
import Login from './login'
import LeaderBoard from './leaderBoard'
class App extends React.Component {
	render(){
    const {authedUser} = this.props
    
		return (
          <div className='container'>
           {
             authedUser? <NavBar username = {this.props.users[authedUser]['name']} dispatch={this.props.dispatch}/>:null
           } 
          <LoadingBar />
            
             <div>
              <Switch>
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
              <Route path='/leaderboard' render={()=>(authedUser? <LeaderBoard />:
                      <Redirect to={{
                        pathname: '/login',
                        state: { backLink: '/leaderboard' }
                      }} />
                     )} />
              <Route path='/add'  render={()=>(authedUser? <Add />:
                     <Redirect to={{
                      pathname: '/login',
                      state: { backLink: '/add' }
                    }} /> 
                     )} />
              <Route path='/login' component={Login} />
              </Switch>
            </div>
              
          </div>
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
