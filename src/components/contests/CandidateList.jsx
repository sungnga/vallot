import React from 'react';
import Candidate from './Candidate';

const CandidateList = props => {
  if (props.office) {
    return (
      <div className='contest'>
            <div className='header item'>
                {props.office}
          {/* {props.office} in {props.district} */}
        </div>
        {/* <div className='candidates'>
          {props.candidates.map(x => (
            <Candidate
              key={x.name}
              name={x.name}
              party={x.party}
              channels={x.channels}
            />
          ))}
        </div> */}
      </div>
    );
  } else return null;
};

export default CandidateList;
