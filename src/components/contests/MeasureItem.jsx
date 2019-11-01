import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../../actions';

const MeasureItem = props => {
  if (props.refTitle) {
    return <div onClick={() => props.selectVideo(props.refTitle)} className='ui item list-item'>
      {props.refTitle}
    </div>;
  } else return null;
};

export default connect(
  null,
  { selectVideo }
)(MeasureItem);
