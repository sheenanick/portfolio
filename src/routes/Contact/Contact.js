import React, { Component } from 'react';
import classNames from 'classnames';
import Bar from '../../components/Shapes/Bar';
import './Contact.css';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      emailError: false,
      nameError: false,
      messageError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const { value, name } = target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    //validate form inputs
    const { email, firstName, lastName, message } = this.state;
    const errors = {
      emailError: this.validateEmail(email),
      nameError: firstName === '' || lastName === '',
      messageError: message === ''
    }
    this.setState(errors);

    //if no errors, dispatch action to save to firebase
    const valid = Object.keys(errors).every((key) => { return !errors[key] });
    if (valid) {
      const contact = {
        email,
        firstName,
        lastName,
        message,
        timestamp: new Date().toString()
      }
      this.props.submitContact(contact);
    } else {
      //focus on input with error
      if (errors.emailError) {
        this.refs.emailError.focus();
      } else if(!firstName) {
        this.refs.firstName.focus();
      } else if(!lastName) {
        this.refs.lastName.focus();
      } else {
        this.refs.message.focus();
      }
    }
  }

  handleReset() {
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      message: '',
      emailError: false,
      nameError: false,
    });
    this.props.resetContact();
  }

  validateEmail(email) {
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return !re.test(email);
  }

  render() {
    const { emailError, email, nameError, firstName, lastName, message, messageError  } = this.state;
    const { submitted } = this.props;
    const emailErrClass = classNames('input', 'form-box', { 'error-box': emailError });
    const nameErrClass = classNames('name', 'form-box', { 'error-box': nameError });
    const msgErrClass = classNames('text-area', 'form-box', { 'error-box': messageError });

    return (
      <div id='Contact' className='app-section'>
        <h1>LET'S CONNECT</h1>
        <Bar />
        {
          submitted ?
          <div className='submitted-message'>
            <h3 className='submitted-title'>Thank you! I'll get back to you as soon as possible.</h3>
            <button className='button button-border' onClick={this.handleReset}>RESET</button>
          </div>
          :
          <form className='form' onSubmit={this.handleSubmit}>
            <div className='form-item'>
              {
                emailError ?
                <p className='errorMessage'>Valid Email Address is required</p>
                : null
              }
              <label>Email Address<span className='accent'>*</span></label>
              <input className={emailErrClass} ref='emailError' name='email' type='email' value={email} onChange={this.handleChange} />
            </div>
            <div className='form-item'>
              {
                nameError ?
                <p className='errorMessage'>Name is required</p>
                : null
              }
              <div className='name-container'>
                <div className='name-field'>
                  <label>First Name<span className='accent'>*</span></label>
                  <input className={nameErrClass} ref='firstName' name='firstName' type='text' value={firstName} onChange={this.handleChange} />
                </div>
                <div className='name-field'>
                  <label>Last Name<span className='accent'>*</span></label>
                  <input className={nameErrClass} ref='lastName' name='lastName' type='text' value={lastName} onChange={this.handleChange} />
                </div>
              </div>
            </div>
            <div className='form-item'>
              {
                messageError ?
                <p className='errorMessage'>Message is required</p>
                : null
              }
              <label>Message<span className='accent'>*</span></label>
              <textarea className={msgErrClass} ref='message' name='message' type='text' value={message} onChange={this.handleChange} />
            </div>
            <div className='center'>
              <button className='button button-border' type='submit' value='submit'>SEND</button>
            </div>
          </form>
        }
      </div>
    );
  }
}
