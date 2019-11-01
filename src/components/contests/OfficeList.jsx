import React from 'react';
import OfficeItem from './OfficeItem';

const OfficeList = props => {
  const offices = props.voterResult.contests;
  //   const offices = props.voterInfo.contests  props.voterInfo.contests : null;

  if (offices) {
    return (
      <div className='ui fluid vertical menu'>
        <h1 className='ui blue header center aligned menu-head'>Candidates</h1>

        {offices.map(x => (
          <OfficeItem
            key={x.office}
            office={x.office}
            district={x.district.name}
            candidates={x.candidates}
            voterResult={props.voterResult}
          />
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default OfficeList;
