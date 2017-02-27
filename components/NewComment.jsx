import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
const MainDiv = styled.div`

`
const CommentName = styled.div`

`
const CommentText = styled.div`

`
const CommentButton = styled.button`

`
class NewComment extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', text: '', responseMsg: '' }
    }

    onChange = field => value => this.setState({ [field]: value })
    _handlers = {
        name: this.onChange('name'),
        text: this.onChange('text')
    }

    updateComments = (name,text) => this.props.updateComments(name,text)

    handleClick = () => axios.post('/newComment', {
        title: this.props.title,
        name: this.state.name,
        text: this.state.text
    }).then(function (response) {
        this.updateComments(this.state.name,this.state.text)        
    }.bind(this))
        .catch(function (error) {
            this.setState({ responseMsg: 'failed to post' })
        }.bind(this))

    render() {


        return (
            <MainDiv>
                <CommentName>Name: <input type='text' onChange={event => this._handlers.name(event.target.value)} /></CommentName>
                <CommentText>Comment: <input type='textarea' onChange={event => this._handlers.text(event.target.value)} /></CommentText>
                <CommentButton onClick={this.handleClick}> Post! </CommentButton>
                {this.state.responseMsg}
            </MainDiv >


        );
    }

}
export default NewComment;