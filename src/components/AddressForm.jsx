import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVoterInfo } from '../actions';

class AddressForm extends Component {
  state = {
    address: ''
  };

  onInputChange = event => {
    this.setState({
      address: event.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    this.props.fetchVoterInfo(this.state.address);
    this.setState({
      address: ''
    });
  };

  render() {
    return (
      <div className='ui container address-container'>
        <h1 className='intro-title'>Welcome to Vallot</h1>
        <h2 className='intro-summary'>
          Vallot allows you to retrieve a sample election ballot by providing a
          valid residential address. You can see what is on your ballot and
          learn more about your candidates and local measures. Create an account
          to save your progress.
        </h2>
        <form
          className='ui form error address-form'
          onSubmit={this.onFormSubmit}
        >
          <label className='header'>
            <i className='map marker alternate icon large map-icon'></i>
            <strong>Enter A Residential Address</strong>
          </label>
          <br />
          <input
            style={{ width: 500, height: 50 }}
            type='text'
            onChange={this.onInputChange}
            placeholder='Enter Address...'
          ></input>
          <label className='ui large secondary label'>
            i.e 123 Main St Seattle WA 98144
          </label>
          <br />
          <button className='ui button big teal'>Fetch My Ballot</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { address: state.voterResult.address };
};

export default connect(
  mapStateToProps,
  { fetchVoterInfo }
)(AddressForm);
