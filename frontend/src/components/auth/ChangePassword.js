import React, { Component } from 'react';
import FormErrors from '../FormErrors';
import Validate from '../utility/FormValidation';
import { Auth } from 'aws-amplify';

class ChangePassword extends Component {

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
                    <h1>Change Password</h1>
                    <FormErrors formErrors={this.state.errors} />

                    <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="password"
                                id="oldpassword"
                                placeholder="Old password"
                                value={this.state.oldpassword}
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
                                    className="input"
                                    type="password"
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
                            <p className="control has-icons-left">
                            <input
                                className="input"
                                type="password"
                                id="confirmpassword"
                                placeholder="Confirm password"
                                value={this.state.confirmpassword}
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
                                Change Password
                            </button>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default ChangePassword;