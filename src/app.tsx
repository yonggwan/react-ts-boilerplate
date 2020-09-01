import * as React from 'react';
import { Paragraph } from '@/components/Paragraph';
import Home from '@/containers/Home';
// import About from '@/containers/About';

export default function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <Paragraph title="ReactJS" content="love it typescript!" />;
      <Home />
    </div>
  );
}
