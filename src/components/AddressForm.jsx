import React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { fetchVoterInfo } from '.././actions';

class AddressForm extends React.Component {
  state = {
    address: ''
  };

  handleChange = event => {
    this.setState({
      address: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.fetchVoterInfo(this.state.address);
    this.setState({
      address: ''
    });
  };

  render() {
    return (
      <div className='address-form'>
        <form className='form' onSubmit={this.handleSubmit}>
          <label>
            <strong>Enter A Valid Residential Address</strong>
          </label>
          <br />
          <input
            type='text'
            onChange={this.handleChange}
            placeholder='Enter Address...'
          ></input>
          <input type='submit' value='Get My Voting Information' />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { address: state.voterInfo };
};

export default withRouter(
  connect(
    mapStateToProps,
    { fetchVoterInfo }
  )(AddressForm)
);
