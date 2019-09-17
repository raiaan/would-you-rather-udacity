import React from 'react'
import {connect} from 'react-redux'
class LeaderBoard extends React.Component{
render(){ 
    console.log('leaderBoard')
    console.log(this.props)
    const{users} = this.props
    return (
        <div>
            <ul>
                {this.props.usersIDs.map((id)=>(
                    <li key = {id}>
                        <div className="leader-info">
                            <img src = {users[id].avatarURL} className="avatar"/>
                            <div>
                                <p>{users[id].name}</p>
                                <p><strong>total answered questions : </strong>{Object.keys(users[id]['answers']).length}</p>
                                <p><strong>total asked questions : </strong>{users[id]['questions'].length}</p>
                            </div>
                        </div>

                    </li>
                ))}
            </ul>
        </div>

    )
}

}
function mapStateToProps({users}){
return{
    users,
    usersIDs: Object.keys(users).sort((a,b)=>(
        (Object.keys(users[a]['answers']).length+users[a]['questions'].length)-(users[b]['answers'].length+users[b]['questions'].length)
    ))
}
}
export default connect(mapStateToProps)(LeaderBoard)