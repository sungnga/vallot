import React from 'react';
import CandidateList from './CandidateList';
import { List, Menu } from 'semantic-ui-react';

const OfficeList = props => {
    console.log(props.voterResult)
    const offices = props.voterResult.contests
//   const offices = props.voterInfo.contests  props.voterInfo.contests : null;

  if (offices) {
    return (
      <Menu vertical>
        <h1 className='candidates-h1'>Candidates</h1>
        {offices.map(x => (
          <CandidateList
            key={x.office}
            office={x.office}
            district={x.district.name}
            candidates={x.candidates}
            voterInfo={props.voterInfo}
          />
        ))}
      </Menu>
    );
  } else {
    return (
null
    );
  }
};

export default OfficeList;

