import * as React from 'react';
import { useStyles } from './style';

export interface Props {
  title: string;
  content?: string;
  primary?: boolean;
}

export const Paragraph = (props: Props): JSX.Element => {
  const classes = useStyles({
    active: !!props.primary,
  });
  return (
    <p className={classes.paragraph}>
      Paragraph. <br /> Title: {props.title} and content: {props.content}!
    </p>
  );
};
