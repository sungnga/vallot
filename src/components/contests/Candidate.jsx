import React from 'react'

const Candidate = (props) => {

  const channels = props.channels ? props.channels : []
  const party = props.party ? props.party : "Other"
  
  if (props.name) {
    return (
      <div className="candidate">
        <h2 className={party[0]}>{party}</h2>
        <span>{props.name}</span><br/>
        {channels.map(x => <a href="{x.id}">{x.type}</a>)}
      </div>
    )
  }
  else return null
}

export default Candidate