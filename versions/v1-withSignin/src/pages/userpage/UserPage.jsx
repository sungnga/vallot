import React, { Fragment } from 'react';
import './UserPage.scss';
import AddressForm from '../../components/address-lookup/AddressForm';

const UserPage = () => (
  <Fragment className='userpage'>
    <h1 id='vote-h1'>Hi User!</h1>
    <AddressForm />
  </Fragment>
);

export default UserPage;
