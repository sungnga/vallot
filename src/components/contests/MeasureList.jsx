import React from 'react';
import { Menu } from 'semantic-ui-react';
import MeasureItem from './MeasureItem';

const MeasureList = props => {
  const measures = props.voterResult.contests;

  if (measures) {
    return (
      <Menu pointing fluid vertical>
        <h1 className='candidates-h1'>Local Measures</h1>


            {measures.map(x => (
              <MeasureItem
                key={x.referendumTitle}
                refTitle={x.referendumTitle}
                refSubtitle={x.referendumSubtitle}
                refText={x.referendumText}
                voterInfo={props.voterInfo}
              />
            ))}


      </Menu>
    );
  } else {
    return null;
  }
};

export default MeasureList;
