import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { fetchVoterInfo } from '../../actions';

class BallotCreate extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = (formValues) => {
      this.props.fetchVoterInfo(formValues)
  }
    
  render() {
    // console.log(this.props); //A list of props available to use
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form error'
      >
        <Field
          name='AddressForm'
          component={this.renderInput}
          label='Please enter your address'
        />
        <button className='ui button teal'>Fetch Ballot</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.AddressForm) {
    errors.AddressForm = 'Please enter a valid address';
  }
  return errors;
};

const formWrapped = reduxForm({
  form: 'ballotCreate',
  validate: validate
})(BallotCreate);

export default connect(null, {fetchVoterInfo})(formWrapped);
