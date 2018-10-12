/* @flow weak */

import React from 'react';

const QuicklinkBox = (props) => {
  return (
    <div className="quickink-outer">
      <p>Name: {props.quickboxName}</p>
      <p>Url:{props.quickboxUrl}</p>
      <p>Img: {props.quickboxImg}</p>
      <p>{console.log("props", props)}</p>
      <p className="quickink-box">quicklink box!!!!</p>
    </div>
  )
}

export default QuicklinkBox;
