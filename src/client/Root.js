import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect, withRouter } from 'react-router-dom';

class Root extends Component {
    render() {
        return (
            !this.props.isLoggedIn ?
                <form action="/api/login" method="post" className="banner">
                    <h1 className="become_a_member">Become a member</h1>
                    <button type="submit">Sign in</button>
                </form>
                : <Redirect to={'/admin'}/>
        );
    }
}

export default withRouter(connect((state) => ({
    isLoggedIn: state.isLoggedIn
}))(Root));
