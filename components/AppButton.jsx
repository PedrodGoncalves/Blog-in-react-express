import React from 'react';
import {Link} from 'react-router';
import styled from 'styled-components';


const Button = styled.button`
    border: none;
    background-color: transparent;
    color : white;
    height:100%;
    width: 100%;
`;

class AppButton extends React.Component{
    constructor(props){
        super(props)
  

    }

    render(){
        return(
            <Link to={'/'+this.props.buttonName}><Button>{this.props.buttonName}</Button></Link>
        );
    }

}

export default AppButton;