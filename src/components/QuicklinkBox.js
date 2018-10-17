/* @flow weak */

import React from 'react';

const QuicklinkBox = (props) => {
  return (
    <div className="quickinkbox">
      <p>Name: {props.quickboxName}</p>

      <img src={props.quickboxImg} />
      <p><a href={props.quickboxUrl}>EXPLORE <i className="fa fa-chevron-right" aria-hidden="true">&nbsp;</i></a></p>
    </div>
  )
}

export default QuicklinkBox;
