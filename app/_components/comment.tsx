'use client';

import HTMLComment from 'react-html-comment';

type Props = {
  text: string;
};

export default function Comment(props: Props) {
  const { text } = props;

  return <HTMLComment text={text} />;
}
