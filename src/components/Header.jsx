import React, { Component } from 'react';
import { Menu, Container, Button } from 'semantic-ui-react';

class Header extends Component {
  render() {
    return (
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item header>
            <i class='check square outline icon big'></i>
            Vallot
          </Menu.Item>

          <Menu.Item position='right'>
            <Button basic inverted content='Login' />
            {/* <Button
              basic
              inverted
              content='Sign Out'
              style={{ marginLeft: '0.5em' }}
            /> */}
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default Header;
