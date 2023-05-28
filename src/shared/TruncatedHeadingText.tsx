import React from 'react';

interface ITruncatedHeadingText {
  text: string;
  maxLength: number;
}

const TruncatedHeadingText: React.FC<ITruncatedHeadingText> = ({
  text,
  maxLength,
}) => {
  const truncatedText =
    text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;

  return <h2>{truncatedText}</h2>;
};

export default TruncatedHeadingText;
