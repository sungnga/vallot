import React from 'react';
import { connect } from 'react-redux';

const MeasureDetail = ({ item, refTitle, subtitle, summary }) => {
  const data = {
    subtitle: 'a subtitle',
    text: 'a brief summery'
  };

  return (
    <div>
      <h1>{item}</h1>
      {/* {data.subtitle}
            {data.text} */}
    </div>
  );
};

const mapStateToProps = state => {
  return { item: state.selectedVideo };
};

export default connect(mapStateToProps)(MeasureDetail);
