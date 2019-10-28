import React, { Component } from 'react';
import BallotList from './ballot/BallotList';
import NavBar from './NavBar';
import BallotCreate from './ballot/BallotCreate';
import { Route, BrowserRouter} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className='ui container'>
          <BrowserRouter>
            <Route path='/' component={BallotCreate} />
            <Route path='/' component={BallotList} />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
