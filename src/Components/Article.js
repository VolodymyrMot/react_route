import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

class Comments extends Component{
    render(){
        const {comment} = this.props;
        console.log('comments', this.props);
        return(
            <div className="comments">
                <h2>Comments</h2>
                {
                    comment.map((item)=>{
                        return(
                            <Link to={"/user/"+item.id} key={item.name}>
                                <div className="comment">
                                    <p>{item.body}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

class Item extends Component{
    render(){
        const {article} = this.props;
        console.log('uuuuuuuu',this.props);
        return(
            <div key={article[0].id}>
                <h1>{article[0].title}</h1>
                <p>{article[0].body}</p>
            </div>
        )
    }
}

class Article extends Component{
    render(){
        return(
            <div className="content">
                <Item article={this.props.posts.filter(item => item.id == this.props.match.params.id)}/>
                <Comments comment={this.props.comments.filter(item => item.postId == this.props.match.params.id)}/>
            </div>
        )
    }
}
export default connect(
    state=>({
        posts: state.posts,
        comments: state.comments
    }),
)(Article);