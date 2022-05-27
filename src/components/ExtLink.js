import React from "react";

const ExtLink = ({ to }) => (
  <a href={to} target="_blank" rel="noopener noreferrer" title={to}>
    {to}
  </a>
);

export default ExtLink;
