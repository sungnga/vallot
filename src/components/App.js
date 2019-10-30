import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import AddressForm from './AddressForm';
import BallotDashboard from './contests/BallotDashboard';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import MeasureItemDetail from './contests/MeasureItemDetail';
import CandidateList from './contests/CandidateList';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container className='main'>
          <BrowserRouter>
            <Route path='/' component={AddressForm} />
            <Route path='/' component={BallotDashboard} />
          </BrowserRouter>
        </Container>
      </div>
    );
  }
}

export default App;
