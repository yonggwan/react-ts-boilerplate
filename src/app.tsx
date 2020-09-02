import * as React from 'react';
import { Paragraph } from '@/components/Paragraph';
import Home from '@/containers/home';
// import About from '@/containers/About';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello world!</h1>
      <Paragraph title="ReactJS" content="love it typescript!" />
      <Home />
    </div>
  );
};

export default App;
