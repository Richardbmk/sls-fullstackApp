import React, { Component } from 'react';
import FormErrors from '../FormErrors';
import Validate from '../utility/FormValidation';

class LogIn extends Component {
    state = {

    };

    clearErrorState = () => {

    };

    handleSubmit = async event => {

        //Form validation


        // AWS Cognito integration here
    };

    onInputChange = event => {

    };

    render() {
        return (
            <section className="section auth">
                <div className="container">
                    <h1>Log In</h1>
                </div>
            </section>
        )
    }
}

export default LogIn;