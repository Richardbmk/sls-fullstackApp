import React, { Component } from 'react';
import FormErrors from '../FormErrors';
import Validate from '../utility/FormValidation';
import { Auth } from 'aws-amplify';

class ForgotPassword extends Component {

    state = {

    };

    clearErrorState = () => {

    };

    forgotPasswordHandler = async event => {

        //Form validation


        // AWS Cognito integration here
    };

    onInputChange = event => {

    };

    render() {
        return (
            <section className="section auth">
                <div className="container">
                    <h1>Forgot your password?</h1>
                    <p>
                        Please enter the email address associated with your account and we'll
                        email you a password reset link.
                    </p>
                    <FormErrors formErrors={this.state.errors} />

                    <form onSubmit={this.forgotPasswordHandler}>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                            <input
                                type="email"
                                className="input"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                                <a href="/forgotpassword">Forgot password?</a>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control">
                            <button className="button is-success">
                                Submit
                            </button>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default ForgotPassword;