import React, { Component, Fragment } from 'react';
import AccordionExampleStandard from '../../features/test/Accordion';
import { Button } from 'semantic-ui-react';
import CheckboxExampleRadioGroup from '../../features/test/GroupedCheckbox';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Button>test</Button>
        <AccordionExampleStandard>
        </AccordionExampleStandard>
        <CheckboxExampleRadioGroup />
        
      </Fragment>
    );
  }
}

export default App;