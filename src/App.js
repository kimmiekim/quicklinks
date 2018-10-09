import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Checkbox from './components/Checkbox';
import CheckboxList from './components/CheckboxList';

class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      isToggleOn: false
    };
    this.openCheckbox = this.openCheckbox.bind(this)
  }

  openCheckbox(){
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
    console.log("clicked")
  }

  render() {
    return (
      <div className="App">
        <button onClick= {this.openCheckbox}>click here</button>
        {this.state.isToggleOn? <CheckboxList />: ''}

      </div>
    );
  }
}

export default App;
