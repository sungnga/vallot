import React from 'react';
import MeasureDetail from './MeasureDetail';
import { Segment } from 'semantic-ui-react';

const MeasureForm = props => {
  const election = props.voterResult.election;

  if (election) {
    return (
      <div fluid>
        <Segment className='ui center aligned ballot-right'>
          <h3>
            <i class='thumbs up icon success-icon'></i>
            Success! You have one upcoming election ballot.
          </h3>
          <h1 className='ui teal header'>{election.name}</h1>
          <h2 className='ui teal header'>{election.electionDay}</h2>
        </Segment>
        <Segment>
          <MeasureDetail />
        </Segment>
      </div>
    );
  } else {
    return null;
  }
};

export default MeasureForm;
