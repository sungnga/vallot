import React from 'react';
import { connect } from 'react-redux';
import { selectVideo } from '../../actions';

const OfficeItem = props => {
  if (props.office) {
    return <div onClick={() => props.selectVideo(props.office)} className='ui item list-item'>
      {props.office}
    </div>;
  } else return null;
};

export default connect(
  null,
  { selectVideo }
)(OfficeItem);


// import React from 'react';
// import { Menu } from 'semantic-ui-react';
// import { connect } from 'react-redux';
// import { selectVideo } from '../../actions';

// const OfficeItem = props => {
//   return (

//       <Menu.Item
//         onClick={() => props.selectVideo(props.office)}
//         className='list-item'
//       >
//         {props.office}
//       </Menu.Item>

//   );
// };

// export default connect(
//   null,
//   { selectVideo }
// )(OfficeItem);