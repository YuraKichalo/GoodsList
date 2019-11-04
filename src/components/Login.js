import React from 'react';
import {Field, reduxForm} from 'redux-form';

import '../styles/Login.css';

class Login extends React.Component {
    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label className="label">
                    <span>{label}</span>
                    <input {...input} autoComplete="off" />
                </label>
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        console.log(formValues)
        this.props.history.push('/goods')
    };

    render() {
        return (
            <div className= "Login ui form error">
                <form className="loginForm" onSubmit={this.props.handleSubmit(this.onSubmit)} >
                    <Field name="name" component={this.renderInput} label="Please, enter your name" />
                        <button className="ui primary button">Submit</button>
                </form>
            </div>
        );
    };
}

const validate = (formValues) => {
    const error = {};

    if (!formValues.name) {
        error.name = 'You must enter a name';
    }

    return error;
};

export default reduxForm({
    form: 'LoginForm',
    validate
})(Login);