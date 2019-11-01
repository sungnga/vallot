import React from 'react';

const CandidateList = (props) => {
console.log(props.voterResult.election)
const candidates = props.voterResult.contests
    return (
      <div className='contest'>
        <div className='header item'>
          {/* {props.voterResult.election.id} in {props.voterResult.district} */}
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
