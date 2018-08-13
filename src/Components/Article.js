import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component{
    render(){
        const {article} = this.props;
        console.log(this.props);
        return(
            <div key={article.id}>
                <h1>{article.title}</h1>
                <p>{article.body}</p>
            </div>
        )
    }
}

class Article extends Component{
    render(){
        return(
            <div className="content">
                <Item article={this.props.posts[this.props.match.params.id]}/>
            </div>
        )
    }
}
export default connect(
    state=>({
        posts: state.posts
    }),
)(Article);