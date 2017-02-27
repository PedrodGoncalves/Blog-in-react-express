import React from 'react'
import axios from 'axios'
import styled from 'styled-components'
import ResponseMsg from './ResponseMsg.jsx'

const MainDiv = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    width:100%;
    height:92%;
`
const FlexInputDiv = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:15%;
    width:25%;
`
const FlexButtonDiv = styled.div`
    display:flex;
    justify-content:center;
    height:5%;
    width:100%;
`
const SubmitButton = styled.button`
    cursor:pointer;
    border: solid rgb(244, 83, 66);
    align:center;
    border-radius:3px;
    color:white;
    transition:0.3s;
    background-color:rgb(244, 83, 66);
    width:12.5%;
    height:100%;
    &:hover{
        border: solid rgb(244, 83, 66);
        background-color:white;
        color:black;
    }
`


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', responseMsg: '' }
    }

    setResponseMsg = status => status == true ? this.setState({username:'',password:'',responseMsg: <ResponseMsg value={true} text='Logged in!'/>}) 
        : this.setState({username:'',password:'',responseMsg: <ResponseMsg value={false} text='Wrong Details.'/>})


    render() {
        return (
            <MainDiv>
                <FlexInputDiv>
                    <span>Username <input type='text' value={this.state.username} onChange={event => this.setState({ username: event.target.value })} /></span>
                    <span style={{ marginTop: '2%' }}>Password  <input type='text' value={this.state.password} onChange={event => this.setState({ password: event.target.value })} /></span>
                </FlexInputDiv>
                <FlexButtonDiv>
                    <SubmitButton onClick={() => axios.post('/login', {
                        username: this.state.username,
                        password: this.state.password
                    })
                        .then(function (response) {
                            this.props.onChange(this.state.username, response.data)
                            this.setResponseMsg(true)
                        }.bind(this))
                        .catch(function (error) {
                            this.setResponseMsg(false)
                        }.bind(this))}>
                        Login
                    </SubmitButton>
                </FlexButtonDiv>
                {this.state.responseMsg}
            </MainDiv >
        );
    }
}


export default Login;