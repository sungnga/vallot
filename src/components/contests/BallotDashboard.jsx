import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OfficeList from './OfficeList';
import MeasureList from './MeasureList';
import { Grid } from 'semantic-ui-react';

class BallotDashboard extends Component {
  render() {
    console.log(this.props.voterResult[2].contests);
    const { voterResult } = this.props;
    return (
      <Grid>
        <Grid.Column width={6}>
          <OfficeList voterResult={voterResult[2]} />
          <MeasureList voterResult={voterResult[2]} />
        </Grid.Column>
            <Grid.Column width={10}>
                
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { voterResult: Object.values(state.voterResult) };
};

export default withRouter(connect(mapStateToProps)(BallotDashboard));
