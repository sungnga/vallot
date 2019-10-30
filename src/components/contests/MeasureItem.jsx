import React from 'react';

const MeasureItem = props => {
  if (props.refTitle) {
    return <div className='list-item item'>{props.refTitle}</div>;
  } else return null;
};

export default MeasureItem;
