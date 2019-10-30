import React, { Component } from 'react';
import { connect } from 'react-redux';
import OfficeList from './OfficeList';
import MeasureList from './MeasureList';
import { Grid } from 'semantic-ui-react';
import CandidateList from './CandidateList';
import MeasureItemDetail from './MeasureItemDetail';

class BallotDashboard extends Component {
  state = {
    selectedListItem: null
  };

  onVideoSelect = () => {
    this.setState({ selectedVideo: '' });
  };

  render() {
    console.log(this.props.voterResult.election);
    const { voterResult } = this.props;
    return (
      <Grid>
        <Grid.Column width={5}>
          <OfficeList
            voterResult={voterResult[2]}
            onListItemSelect={this.onListItemSelect}
          />
          <MeasureList
            voterResult={voterResult[2]}
            onListItemSelect={this.onListItemSelect}
          />
        </Grid.Column>
        <Grid.Column width={11}>
          <CandidateList />
          <MeasureItemDetail />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    voterResult: Object.values(state.voterResult)
  };
};

export default connect(mapStateToProps)(BallotDashboard);
