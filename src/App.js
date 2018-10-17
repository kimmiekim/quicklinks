import React, { Component } from 'react';
import { instanceOf } from 'prop-types';
import './App.css';

import { withCookies, Cookies } from 'react-cookie';
import 'font-awesome/css/font-awesome.min.css';

import Checkboxes from './components/Checkboxes';
import Checkbox from './components/Checkbox';
import CheckboxList from './components/CheckboxList';
import QuicklinkBox from './components/QuicklinkBox';

class App extends Component {
  componentDidUpdate() {
    const {cookies} = this.props;
    this.state = {
      checkedItems: cookies.get('checkedItems') || 'not saving to cookies',
    }

    console.log("updated cookies: ", this.state)

  }
  componentWillMount(){
    const { checkedItems } = this.state;
    console.log("comp will mount", checkedItems)
  }

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  }

  constructor(props){
    super(props);
    const { cookies } = props;
    this.state= {
      isToggleOn: false,
      checkedItems: new Map(cookies.get('checkedItems')),
      // savedQuicklinks: cookies.get('savedQuicklinks') || 'not saving to cookies',
      checkboxes: Checkboxes

    };

    this.openCheckbox = this.openCheckbox.bind(this);
    this.addTocheckedItems = this.addTocheckedItems.bind(this);
    this.setCookies = this.setCookies.bind(this);

    console.log('checkedItems type is:', typeof(checkedItems))
  }

  setCookies(){
    const {cookies} = this.props;
    const {checkedItems, checkboxes} = this.state;

    const checkedItemsArr= Array.from(checkedItems);

    cookies.set('checkedItems', JSON.stringify(checkedItemsArr), {path: '/'})
    console.log("this.state.savedQuicklinks",JSON.stringify(checkedItemsArr))

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

    // cookies.set(item, isChecked , {path: '/'});
    this.setCookies()

    this.setState( prev => ({
      checkedItems: prev.checkedItems.set(item, isChecked)
      // checkedItems: {[item]: isChecked, ...prev.checkedItems }
    }));
  }


  render() {
    console.log("key",Object.keys(this.state.checkedItems))
    const { checkedItems, isToggleOn, checkboxes, savedQuicklinks } = this.state;
    const arr = Array.from(checkedItems);
    let filteredArr =[];

    console.log("checked items", checkedItems)


    arr.map(([key, value]) => value === true? filteredArr.push(checkboxes.filter(box => box.name == key)) : 'null');
    // this.props.cookies.set('name', JSON.stringify(filteredArr), {path: '/'})

    return (
      <div className="App">
        <div className='quicklinkboxes-wrapper'>
          {savedQuicklinks? savedQuicklinks.map(savedItem => <QuicklinkBox quickboxName={savedItem[0].name} quickboxUrl={savedItem[0].linkUrl} quickboxImg={savedItem[0].imgUrl} />): ''}
          {filteredArr.map((elem) => <QuicklinkBox quickboxName={elem[0].name} quickboxUrl={elem[0].linkUrl} quickboxImg={elem[0].imgUrl} /> )}
        </div>
      
        <div className='select-section-wrapper'>
          <div className='inner-wrapper'>
            <p>This is your personal page. Use the side menu option (+) to create your own widgets for pages and informationa you access regularly.</p>
          </div>
          <div className='inner-wrapper'>
            <button className='quicklink-btn' onClick={this.openCheckbox}>
              <p>Add your widget</p>
              <i className="fa fa-plus" aria-hidden="true">&nbsp;</i>
            </button>
          </div>
          <div>

          </div>
        </div>
      {isToggleOn? <CheckboxList cookies={this.props.cookies} checkboxes={checkboxes} checkedItems={checkedItems} onHandleChange={this.addTocheckedItems} openQuicklinkBox={this.openQuicklinkBox} />: ''}
        </div>
      )}
}

export default withCookies(App);
