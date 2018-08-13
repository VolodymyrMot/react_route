import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class UserItem extends Component{
    render(){
        const {user} = this.props;
        console.log(this.props);
        return(
            <div>
                <h2>User</h2>
                <h3><span>Name: </span>{user[0].name}</h3>
                <h3><span>Email: </span>{user[0].email}</h3>
                <hr/>
            </div>
        )
    }
}

class User extends Component{
    render(){
        return(
            <div>
                <div className="content">
                    <UserItem user={this.props.comments.filter(item => item.id == this.props.match.params.id)}/>
                </div>
            </div>
        )
    }
}export default connect(
    state=>({
        comments: state.comments
    }),
)(User);