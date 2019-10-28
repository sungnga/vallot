import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVoterInfo } from '../../actions';
import BallotCreate from './BallotCreate';

class BallotList extends Component {
  componentDidMount() {
    this.props.fetchVoterInfo();
  }

  render() {
    console.log(this.props.voterInfo);
    return (
      <div className='ui container'>
        {this.props.voterInfo}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { voterInfo: state.voterInfo };
};

export default connect(
  mapStateToProps,
  { fetchVoterInfo }
)(BallotList);
