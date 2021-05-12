import React, { Component } from 'react';
import FormErrors from '../FormErrors';
import Validate from '../utility/FormValidation';
import { Auth } from 'aws-amplify';

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
                    <FormErrors formErrors={this.state.errors} />

                    <form onSubmit={this.handleSubmit}>
                        <div className="field">
                            <p className="control">
                            <input 
                                className="input" 
                                type="text"
                                id="username"
                                aria-describedby="usernameHelp"
                                placeholder="Enter username or email"
                                value={this.state.username}
                                onChange={this.onInputChange}
                            />
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                            <input 
                                className="input" 
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={this.state.password}
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
                                Login
                            </button>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default LogIn;