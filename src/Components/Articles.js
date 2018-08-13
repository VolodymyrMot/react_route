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
                            <Link key={item.id} to={"/post/"+item.id} className="item">
                                <h3>{item.title}</h3>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

class Articles extends Component{
    render(){
        return(
            <div className="content">
                <Item articles={this.props.posts}/>
            </div>
        )
    }
}export default connect(
    state=>({
        posts: state.posts
    }),
)(Articles);