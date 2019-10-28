import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchVoterInfo } from '../actions'

class AddressForm extends Component {

    state = {
        address: '',
    }
    
    handleChange = event => {
        this.setState({
          address: event.target.value
        })
      }
    
      handleSubmit = event => {
        event.preventDefault()
        this.props.fetchVoterInfo(this.state.address)
        this.setState({
          address: ""
        })
      }

      render(){
        return (
          <div className='ui container'>
            <form className="ui form error" onSubmit={this.handleSubmit}>
                <label><strong>Enter A Valid Residential Address</strong></label><br/>
                <input type="text" onChange={this.handleChange} placeholder="Enter Address..."></input>
                <button className='ui button teal'>Fetch My Ballot</button>
            </form>
          </div>
        )
      }
    }

    const mapStateToProps = state => {
        return {address: state.voterInfo.address}
       }

export default connect(mapStateToProps, {fetchVoterInfo})(AddressForm)
