import React from 'react';
import styled from 'styled-components'

const MsgStyle = styled.span`
    color: ${props => props.value  ? 'green' : 'red'};

`
class ResponseMsg extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <MsgStyle value={this.props.value}>{this.props.text}</MsgStyle>
        )
    }


}

export default ResponseMsg;