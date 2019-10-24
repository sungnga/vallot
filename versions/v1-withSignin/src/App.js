import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userpage/UserPage';
import HomePage from './pages/homepage/HomePage';
import NavBar from './components/nav/NavBar';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        {/* <NavBar currentUser={this.state.currentUser} /> */}
        <Switch>
          <Route exact path='/' component={UserPage} />
          <Route path='/signin' component={HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
