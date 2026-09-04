import { createRoot } from 'react-dom/client'
import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: props.fav};
  }

componentDidMount(){
    setTimeout(()=> {
        this.setState({favoritecolor:"yellow"})
    },3000);
}

getSnapshotBeforeUpdate(prevProps, prevState){
    document.getElementById('div1').innerHTML = 
    "Before the update, the favorite color was " + prevState.favoritecolor;
}

componentDidUpdate(){
    document.getElementById('div2').innerHTML  = 
    "the updated value of favorite colour is "+ this.state.favoritecolor;
}
  render() {
    return (
      <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="div1"></div>
        <div id="div2"></div>
      </div>
    );
  }
}

export default Header;