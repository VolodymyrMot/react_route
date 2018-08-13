import React from 'react';
import { Component } from 'react';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import Item from './Item';


// class Item extends Component{
//
//     render(){
//         const {articles} = this.props;
//         console.log(this.props);
//         return(
//             <div>
//
//                 {
//                     articles.map((item)=>{
//                         return(
//                             <Link key={item.id} to={"/post/"+item.id} className="item">
//                                 <h3>{item.title}</h3>
//                                 <button onClick={()=>{this.props.onDeletePost(item)}}>Delete</button>
//                             </Link>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }

class Articles extends Component{
    addPost = ()=>{
        console.log('addPost ' + this.postInputTitle.value + this.postInputBody.value);
        this.props.onAddPost(this.postInputTitle.value, this.postInputBody.value);
        this.postInputTitle.value = '';
        this.postInputBody.value = '';
        console.log(this.state);
    };
    render(){
        return(
            <div className="content">
                <div className="addPost">
                    <input type="text" ref={(input)=>{this.postInputTitle = input}} placeholder="input name"/>
                    <textarea ref={(input2)=>{this.postInputBody = input2}} placeholder="input body"/>
                    <button onClick={this.addPost.bind(this)} className="btn">Add post</button>
                </div>
                <Item articles={this.props.posts}/>
            </div>
        )
    }
}export default connect(
    state=>({
        posts: state.posts
    }),
    dispatch=>({
        onAddPost: (title, body) => {
            const payload = {
                id: Date.now(),
                title: title,
                body: body
            };
            dispatch({type: 'ADD_POST', payload});
            },
        onDeletePost: (item)=>{
            console.log(item);
            dispatch({type: 'DELETE_POST', payload: item});
        }
    })
)(Articles);