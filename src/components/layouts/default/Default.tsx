import * as React from 'react';
import { useStyle } from './style';

type Props = {
  children?: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const classes = useStyle();
  return <div className={classes.container}>{props.children}</div>;
};

export default DefaultLayout;
