import React from 'react';

const CandidateList = props => {
  if (props.office) {
    return (
      <div
        onClick={() => props.onListItemSelect(props.officce)}
        className='list-item item'
      >
        {props.office}
      </div>
    );
  } else return null;
};

export default CandidateList;
