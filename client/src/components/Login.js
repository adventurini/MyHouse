import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import {  } from '../stateTree/actions';



class Login extends Component {
    
    render() {
        return (
            <Fragment>
                <h3>This is the login component</h3>
            </Fragment>
        )
    }
}



const mapStateToProps = state => ({
    ...state
})
  
export default connect(
    mapStateToProps, 
    {  }
)(Login);

