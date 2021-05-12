import React, { Component } from 'react';
import FormErrors from '../FormErrors';
import Validate from '../utility/FormValidation';
import { Auth } from 'aws-amplify';

class ForgotPasswordVerification extends Component {

    state = {

    };

    clearErrorState = () => {

    };

    passwordVerificationHandler = async event => {

        //Form validation


        // AWS Cognito integration here
    };

    onInputChange = event => {

    };

    render() {
        return (
            <section className="section auth">
                <div className="container">
                    <h1>Set new password</h1>
                    <p>
                        Please enter the verification code sent to your email address below,
                        your email address and a new password.
                    </p>
                    <FormErrors formErrors={this.state.errors} />

                    <form onSubmit={this.passwordVerificationHandler}>
                        <div className="field">
                            <p className="control">
                            <input 
                                className="input" 
                                type="text"
                                id="verificationcode"
                                aria-describedby="verificationCodeHelp"
                                placeholder="Enter verification code"
                                value={this.state.verificationcode}
                                onChange={this.onInputChange}
                            />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="email"
                                id="email"
                                aria-describedby="emailHelp"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.onInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                            <input
                                type="password"
                                className="input"
                                id="newpassword"
                                placeholder="New password"
                                value={this.state.newpassword}
                                onChange={this.onInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
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
        )
    }
}

export default ForgotPasswordVerification;