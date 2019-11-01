import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfficeList from './OfficeList';
import MeasureList from './MeasureList';
import { Grid } from 'semantic-ui-react';
import MeasureForm from './MeasureForm';

class BallotDashboard extends Component {
  render() {
    const { voterResult } = this.props;

    if (!voterResult) {
      return <div>Please enter a valid address</div>;
    }

    return (
      <Grid className='ballot-dashboard'>
        <Grid.Column width={5}>
          <MeasureList voterResult={voterResult[2]} />
          <OfficeList voterResult={voterResult[2]} />
        </Grid.Column>
        <Grid.Column width={11}>
          <MeasureForm voterResult={voterResult[2]} />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    voterResult: Object.values(state.voterResult)
  };
};

export default connect(mapStateToProps)(BallotDashboard);
