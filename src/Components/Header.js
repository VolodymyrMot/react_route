import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
    render(){
        return (
            <Link to="/" className="link">
                <div id="header">
                    <h1>Posts</h1>
                </div>
            </Link>
        )
    }
}
export default Header;