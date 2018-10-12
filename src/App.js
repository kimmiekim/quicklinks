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
      showQuicklinkComponent: [],
      checkboxes: Checkboxes

    };
    this.openCheckbox = this.openCheckbox.bind(this)
    this.addTocheckedItems = this.addTocheckedItems.bind(this)
    this.openQuicklinkBox = this.openQuicklinkBox.bind(this)



  }

  openCheckbox(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  addTocheckedItems(event){
    const target = event.target;
    // const value = target.type === 'checked'? target.checked : target.value;
    // const value = target.value;
    const item = target.name;
    const linkUrl = target.linkUrl;
    const imgUrl = target.imgUrl;
    const isChecked = target.checked;
      console.log("get", this.state.showQuicklinkComponent)
      console.log("link",target.value)


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
    const arr = Array.from(checkedItems);
    let filteredArr =[];

    arr.map(([key, value]) => value === true? filteredArr= checkboxes.filter(box => box.name == key) : 'null')

    return (
      <div className="App">


        {filteredArr.map((elem) => < QuicklinkBox quickboxName={elem.name} quickboxUrl={elem.linkUrl} quickboxImg={elem.imgUrl} /> )}

        <button onClick= {this.openCheckbox}>click here</button>
        {isToggleOn? <CheckboxList checkboxes={checkboxes} checkedItems={checkedItems} onHandleChange={this.addTocheckedItems} openQuicklinkBox={this.openQuicklinkBox} />: ''}
        </div>
      )}
}

export default App;
