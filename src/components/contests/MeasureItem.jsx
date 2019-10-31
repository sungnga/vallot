import React from 'react';
import MeasureItemDetail from './MeasureForm';

const MeasureItem = ({ onListItemSelect, refTitle, refText }) => {
  return (
    <div onClick={() => onListItemSelect()} className='list-item item'>
          {refTitle}
    </div>
  );
};

export default MeasureItem;
