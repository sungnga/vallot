// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { withFirebase } from 'react-redux-firebase'
// import { Menu, Container, Button } from 'semantic-ui-react';
// import { NavLink, Link, withRouter } from 'react-router-dom';
// import SignedOutMenu from '../Menus/SignedOutMenu';
// import SignedInMenu from '../Menus/SignedInMenu';






import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/logo.png';
import './NavBar.scss';

const NavBar = ({ currentUser }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default NavBar;
