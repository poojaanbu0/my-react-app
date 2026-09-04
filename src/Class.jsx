import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: 'red'};
    }
    // static getDerivedStateFromProps(props, state){
    //     return {favoritecolor: props.favcol};
    // }
    componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor:"yellow"})
        }, 2000)
    }
    render(){
        return (
        <>
        <h1>My favoritecolor is {this.state.favoritecolor}</h1>
        </>
        );
    }
}


export default Header;