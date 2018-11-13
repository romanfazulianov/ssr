import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
class Admin extends Component {

    render() {
        return (
            this.props.isLoggedIn ?
                <form action="/api/logout" method="post" className="banner">
                    <h1 className="become_a_member">Admin? Eat a cookie</h1>
                    <button type="submit">Logout</button>
                </form> :
                <Redirect  to={'/'} />
        )
    }
}

export default withRouter(connect((state) => ({
    isLoggedIn: state.isLoggedIn
}))(Admin));
