/* @flow */

import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Checkboxes from './Checkboxes';
import QuicklinkBox from './QuicklinkBox';

class Checkbox extends Component {
constructor(props){
  super(props);
}

render(){
  return ({type='checkbox', name, linkUrl, imgUrl, checked=false, onChange}) => (
    <input type={type} name={name} checked={checked} onChange={onChange} />
  )
}

}

// Checkbox.propTypes = {
//   type: PropTypes.string,
//   name: PropTypes.string.isRequired,
//   checked: PropTypes.bool,
//   onChange: PropTypes.func.isRequired,
// }


export default Checkbox;
