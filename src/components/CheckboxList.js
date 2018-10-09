/* @flow */

import React, { Component } from 'react';
import Checkboxes from './Checkboxes';
import Checkbox from './Checkbox';
import QuicklinkBox from './QuicklinkBox';


export default class CheckboxList extends Component {
  constructor(props){
    super(props);

    this.state = {
      checkedItems: new Map,
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const target = event.target;
    // const value = target.type === 'checked'? target.checked : target.value;
    const value = target.value;
    const item = target.name;
    const linkUrl = target.linkUrl;
    const imgUrl = target.imgUrl;
    const isChecked = event.target.checked;

    //add to state array using spread operator
    //next step is to filter newly added value so it's not repeated
    this.setState( prev => ({
      checkedItems: prev.checkedItems.set(item, isChecked)
    }));
    // console.log("checked");
    //
    console.log("names", this.state.checkedItems);
  }


  render() {
    return (
      <div>
      <React.Fragment>
        {
          Checkboxes.map(data => (
            <label key={data.key}>
              {data.name}, {data.linkUrl}
              <Checkbox name={data.name} checked= {this.state.checkedItems.get(data.name)} onChange={this.handleChange} /><br />
            </label>
          ))
        }
      </React.Fragment>
      {/* <React.Fragment>
        {
          this.state.checkedItems? Object.keys(this.state.checkedItems).map(item => console.log("item:",item)) :''
        }
      </React.Fragment> */}
      </div>

    );
  }
}
