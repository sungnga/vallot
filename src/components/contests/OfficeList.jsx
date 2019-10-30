import React from 'react';
import { Menu } from 'semantic-ui-react';
import OfficeItem from './OfficeItem';

const OfficeList = props => {
  console.log(props.voterResult);
  const offices = props.voterResult.contests;
  //   const offices = props.voterInfo.contests  props.voterInfo.contests : null;

  if (offices) {
    return (
      <Menu pointing fluid vertical>
        <h1 className='candidates-h1'>Candidates</h1>
        {offices.map(x => (

            <OfficeItem
              key={x.office}
              office={x.office}
              district={x.district.name}
                candidates={x.candidates}
                onListItemSelect={props.onListItemSelect}
              voterInfo={props.voterInfo}
            />

        ))}
      </Menu>
    );
  } else {
    return null;
  }
};

export default OfficeList;
