import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'


class Item extends Component{

    render(){
        const {articles} = this.props;
        console.log(this.props);
        return(
            <div>

                {
                    articles.map((item)=>{
                        return(
                            <div key={item.id} className="item">
                                <Link to={"/post/"+item.id}>
                                    <h3>{item.title}</h3>
                                </Link>
                                <button onClick={()=>{this.props.onDeletePost(item)}} className="btn">Delete</button>
                            </div>

                        )
                    })
                }
            </div>
        )
    }
}export default connect(
    state=>({
        posts: state.posts
    }),
    dispatch=>({
        onDeletePost: (item)=>{
            console.log(item);
            dispatch({type: 'DELETE_POST', payload: item});
        }
    })
)(Item);