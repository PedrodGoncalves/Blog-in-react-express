import React from 'react';
import AppButton from './AppButton.jsx'
import styled from 'styled-components'

const AppBarDiv = styled.div`
    display: flex;
    align-items : center;
    width: 100%;
    height:5%;
    background-color: rgba(0, 0, 0, 0.8);

`;

const ButtonDiv= styled.div`
    height:100%;
    width:15%;

`;

class AppBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        var options = ['blog','contact','newpost','login']
 
        return(
            <AppBarDiv>
            {options.map(function(name){
                if( name == 'newpost' && this.props.user == null || name== 'login' && this.props.user != null ){
                    return null
                }else{
                    return <ButtonDiv key = {name}><AppButton buttonName = {name} /></ButtonDiv>
                }
            }.bind(this))}
            </AppBarDiv>
        );
    }

}

export default AppBar;