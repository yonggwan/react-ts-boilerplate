import * as React from 'react';
import { Paragraph } from '@/components/Paragraph/Paragraph';
import Home from '@/containers/home';
import About from '@/containers/about';
import RyanImage from '@/images/ryan.png';
import { Button } from '@material-ui/core';

const App = (): JSX.Element => {
  const [active, setActive] = React.useState(false);
  return (
    <div>
      <h1>Hello world! {About}</h1>
      <Button onClick={(ev) => setActive(!active)} color="primary">
        Hello!
      </Button>
      <img src={RyanImage} alt="" width={200} />
      <Paragraph
        title="ReactJS"
        content="love it typescript!"
        primary={active}
      />
      <Home />
    </div>
  );
};

export default App;
