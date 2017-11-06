import React, {Component} from 'react';

const searchBar = {
  marginLeft: '90px',
  width: '300px',
  height: '40px',
  marginTop: '40px',
  borderRadius: '3%'

};
const btn = {
  padding: '5px',
  height: '48px',
  width: '40px',
  backgroundColor: '#f1f1f1',
  borderRadius: '6%'

};

const searchDiv = {
  marginLeft: '9px'
};

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.currentinput = ''
    this.state = {
      currentSearch: ''
    }
  }

  handleChange(e){
    this.currentinput = e.target.value;
  }
  handleEnter(){

    this.props.onClick(this.currentinput);
  }

  render() {
    return (
      <div>
        <div style={searchDiv}>
          <input style={searchBar} type="text" name="search" placeholder={this.props.holder} onChange={this.handleChange.bind(this)}/>
          <button style={btn} onClick={()=> this.handleEnter()}>GO!</button>
        </div>
      </div>)
  }
};





export default SearchBar;