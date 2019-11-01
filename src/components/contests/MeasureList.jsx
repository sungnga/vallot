import React from 'react';
import MeasureItem from './MeasureItem';

const MeasureList = props => {
  const measures = props.voterResult.contests;

  if (measures) {
    return (
      <div className='ui fluid vertical menu menu-container'>
        <h1 className='ui blue header center aligned menu-head'>
          Local Measures
        </h1>

        {measures.map(x => (
          <MeasureItem
            key={x.referendumTitle}
            refTitle={x.referendumTitle}
            refSubtitle={x.referendumSubtitle}
            refText={x.referendumText}
            voterResult={props.voterResult}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default MeasureList;
