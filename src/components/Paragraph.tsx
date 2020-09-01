import * as React from 'react';

export interface Props {
  title: string;
  content?: string;
}

export const Paragraph = (props: Props) => {
  return (
    <p>
      Paragraph. <br /> Title: {props.title} and content: {props.content}!
    </p>
  );
};
