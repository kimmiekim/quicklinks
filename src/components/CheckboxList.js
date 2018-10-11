/* @flow */

import React, { Component } from 'react';
import Checkboxes from './Checkboxes';
import Checkbox from './Checkbox';
import QuicklinkBox from './QuicklinkBox';


export default class CheckboxList extends Component {
  constructor(props){
    super(props);

    // this.state = {
    //   checkedItems: new Map(),
    // }
    // this.handleChange = this.handleChange.bind(this);

  }

  // handleChange(event){
  //   const target = event.target;
  //   // const value = target.type === 'checked'? target.checked : target.value;
  //   const value = target.value;
  //   const item = target.name;
  //   const linkUrl = target.linkUrl;
  //   const imgUrl = target.imgUrl;
  //   const isChecked = event.target.checked;
  //
  //   //add to state array using spread operator
  //   //next step is to filter newly added value so it's not repeated
  //   this.setState( prev => ({
  //     checkedItems: prev.checkedItems.set(item, isChecked)
  //   }));
  //
  //
  // }
  changeCheckeditems = (data) => {
    this.props.onHandleChange(data);
    this.props.openQuicklinkBox(data)
  }

  render() {
    const { checkedItems, checkboxes } = this.props
    return (
      <div className="checkbox-form">
        {
          checkboxes.map(data => (
            <label key={data.key}>
              {data.name}, {data.linkUrl}
              <Checkbox name={data.name} checked={checkedItems.get(data.name)} onChange={(data) => this.changeCheckeditems(data)} linkUrl={data.linkUrl} /><br />

            </label>

          ))
        }
      </div>


    );
  }
}
