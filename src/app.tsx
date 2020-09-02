import * as React from 'react';
import { Paragraph } from '@/components/Paragraph';
import Home from '@/containers/home';
import About from '@/containers/about';

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello world!{About}</h1>
      <Paragraph title="ReactJS" content="love it typescript!" />
      <Home />
    </div>
  );
};

export default App;
