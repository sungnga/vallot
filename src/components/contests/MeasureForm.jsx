import React from 'react';
import { Menu, Card } from 'semantic-ui-react';

import MeasureDetail from './MeasureDetail';

const MeasureForm = props => {
  const measures = props.voterResult.contests;

  if (measures) {
    return (
      <div>
        <h1 className='candidates-h1'>Local Measures</h1>

        {measures.map(x => (
          <Card fluid>
            <MeasureDetail
              key={x.referendumTitle}
              refTitle={x.referendumTitle}
              refSubtitle={x.referendumSubtitle}
              refText={x.referendumText}
              onListItemSelect={props.onListItemSelect}
              voterInfo={props.voterInfo}
            />
          </Card>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default MeasureForm;
