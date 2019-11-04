import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';

import {close, addItem} from '../actions'; 

class ModalPopup extends React.Component {
    renderError = ({error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    };

    renderInputs = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`

        return (
            <div className={className}>
                <label>
                    {label}
                    <input {...input} autoComplete="off" />
                </label>
                {this.renderError(meta)}
            </div>
        );
    };

    closePopup = () => {
        this.props.close();
    };

    onSubmit = (formValues) => {
        console.log(formValues)

        this.props.addItem(formValues)
        this.props.close();
    }

    render() {
        const display = this.props.showPopup ? "flex" : "none";

        return (
            <div style={{display: display}} className="modal">
                <div className="modal-content">
                    <i onClick={this.closePopup} className="red large close icon"></i>
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                        <Field name="alt" component={this.renderInputs} label="Restaurant name" />
                        <Field name="description" component={this.renderInputs} label="Description" />
                        <Field name="src" component={this.renderInputs} label="Restaurant image url" />
                        <Field name="time" component={this.renderInputs} label="Delivery time" />
                        <button className="ui primary button">Add</button>
                    </form>
                </div>
            </div>
        );
    };
}

const validate = (formValues) => {
    const errors = {};

    if (!formValues.alt) {
        errors.alt = 'You must enter a name';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    if (!formValues.src) {
        errors.src = 'You must enter a url';
    }

    if (!formValues.time) {
        errors.time = 'You must enter a time';
    }

    return errors;
};

const formWrapper = reduxForm({
    form: 'AddItem',
    validate
})(ModalPopup);

const mapStateToProps = (state) => {
    return {showPopup: state.images.showPopup}
};

export default connect(mapStateToProps, {close, addItem})(formWrapper);