import React from 'react';

const Candidate = name => {
  if (name) {
    return (
      <div className='candidate'>
        <h3>{name}</h3>
      </div>
    );
  } else return null;
};

export default Candidate;
