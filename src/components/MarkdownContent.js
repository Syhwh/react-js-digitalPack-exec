import React from 'react';
import ReactMarkdown from 'react-markdown';

export const MarkdownContent = ({ children }) => {
  return <ReactMarkdown>{children}</ReactMarkdown>;
};
