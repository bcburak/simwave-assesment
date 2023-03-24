import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from '../Container';


storiesOf('Container', module)
  .add('default', () => (
    <div style={{ backgroundColor: '#f7fafc', height: '100vh', padding: '2rem' }}>
      <Container>
        <h1>Hello world of stories!</h1>
        <p>This is some sample content inside a Container component.</p>
      </Container>
    </div>
  ));
