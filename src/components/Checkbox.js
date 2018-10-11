/* @flow */

import React from 'react';
import PropTypes from 'prop-types';

import Checkboxes from './Checkboxes';
import QuicklinkBox from './QuicklinkBox';
import CheckboxList from './CheckboxList';

const Checkbox =  ({type='checkbox', name, linkUrl, imgUrl, checked=false, onChange}) => (
    <input type={type} name={name} checked={checked} linkUrl={linkUrl} onChange={onChange} >
      {checked? showQuicklinkBox(name, linkUrl): null}
    </input>

  )

  // const showQuicklinkBox = (name,linkUrl) => (<QuicklinkBox name={name} linkUrl={linkUrl} />);
  const showQuicklinkBox = (name,linkUrl) => {console.log(name, linkUrl)};


Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}
//
// class Checkbox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.showQuicklinkBox = this.showQuicklinkBox.bind(this)
//     this.state = {
//       showQuicklinkComponent: false,
//     }
//   }
//
//
//   showQuicklinkBox(e){
//     this.setState({
//       showQuicklinkComponent: !this.state.showQuicklinkComponent,
//     })
//       console.log(this.state)
//   };
//
//   render(){
//     const type='checkbox';
//     let name = this.props.name;
//     let linkUrl = this.props.linkUrl;
//     let imgUrl = this.props.imgUrl;
//     let checked= this.props.checked;
//     let onChange = this.props.onChange
//     return (
//       <React.Fragment>
//       {this.state.showQuicklinkComponent? <QuicklinkBox />: null}
//         <input type={type} name={name} checked={checked} onChange={onChange} linkUrl={linkUrl} onClick={this.showQuicklinkBox} />
//       </React.Fragment>
//     )
//   }
// }


export default Checkbox;
