import React from 'react';
import Candidate from './Candidate';

const CandidateList = (props) => {

const candidates = props.voterResult.contests
    return (
      <div className='contest'>
        <div className='header item'>
          {props.office} in {props.district}
        </div>
        <div className='candidates'>
          {/* {candidatess.map(x => (
            <Candidate
              key={x.name}
              name={x.name}
              party={x.party}
              channels={x.channels}
            />
          ))} */}
        </div>
      </div>
    );
  } 

export default CandidateList;
