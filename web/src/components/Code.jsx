import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import style from "react-syntax-highlighter/src/styles/hljs/solarized-dark";

export default ({ node }) => {
  if (!node || !node.code) {
    return null;
  }
  const { language, code } = node;
  return (
    <SyntaxHighlighter style={style} language={language || "text"}>
      {code}
    </SyntaxHighlighter>
  );
};
