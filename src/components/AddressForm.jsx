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
      <div className='ui address-form'>
        <form className='ui form error' onSubmit={this.onFormSubmit}>
          <label className='header'>
            <strong>Enter A Valid Residential Address</strong>
          </label>
          <br />
          <input
            style={{ width: 500, height: 50 }}
            type='text'
            onChange={this.onInputChange}
            placeholder='Enter Address...'
          ></input>
          <br />
          <button className='ui button large teal'>Fetch My Ballot</button>
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
