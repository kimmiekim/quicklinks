import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkboxes from './components/Checkboxes';
import Checkbox from './components/Checkbox';
import CheckboxList from './components/CheckboxList';
import QuicklinkBox from './components/QuicklinkBox';

class App extends Component {
  componentDidMount(){
    // Checkboxes.map(data => {
    //   this.setState( prev => ({
    //     checkedItems: prev.checkedItems.set(data, false)
    //   }));
    // })
  }

  constructor(props){
    super(props);
    this.state= {
      isToggleOn: false,
      checkedItems: new Map(),
      showQuicklinkComponent: {},
      checkboxes: Checkboxes

    };
    this.openCheckbox = this.openCheckbox.bind(this)
    this.addTocheckedItems = this.addTocheckedItems.bind(this)
    this.openQuicklinkBox = this.openQuicklinkBox.bind(this)

    console.log(this.state.checkboxes)

  }

  openCheckbox(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  addTocheckedItems(event){
    const target = event.target;
    // const value = target.type === 'checked'? target.checked : target.value;
    const value = target.value;
    const item = target.name;
    const linkUrl = target.linkUrl;
    const imgUrl = target.imgUrl;
    const isChecked = event.target.checked;
    console.log('event', event)


    this.setState( prev => ({
      checkedItems: prev.checkedItems.set(item, isChecked),
    }));


    // console.log("quicklinks",this.state.showQuicklinkComponent)
  }

  openQuicklinkBox(data){
    // console.log("quick",this.checkedItems.get(data.name))
  };

  render() {
    const { checkedItems, isToggleOn, checkboxes, showQuicklinkComponent } = this.state;

    return (
      <div className="App">
        // {checkedItems.forEach((key, value) => { key===true? <QuicklinkBox /> : console.log('no')})}
        {Array.from(checkedItems).map(([key, value]) => value===true? <QuicklinkBox quickboxKey={key} quickboxValue={value} /> : console.log('not quick', key) )}
        <button onClick= {this.openCheckbox}>click here</button>
        {isToggleOn? <CheckboxList checkboxes={checkboxes} checkedItems={checkedItems} onHandleChange={this.addTocheckedItems} openQuicklinkBox={this.openQuicklinkBox} />: ''}
        </div>
      )}
}

export default App;
