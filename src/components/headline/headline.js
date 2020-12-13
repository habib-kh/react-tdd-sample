import React, { useState } from 'react';

function Headline(props) {
  const { header, desc } = props;
  if (!header) {
    return null;
  }
  return (
    <div data-test='headlineComponent'>
      <h1 data-test='header'>{header}</h1>
      <p data-test='desc'>{desc}</p>
    </div>
  );
}

export default Headline;
