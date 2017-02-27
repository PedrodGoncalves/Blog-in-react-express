import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import ResponseMsg from './ResponseMsg.jsx'

const NewPostMainDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction : column;
`;
const BlogTextArea = styled.textarea`
    width: 50%;
`;

const PostButton = styled.button`
    width: 50%;
`
class CreatePost extends React.Component {
    constructor(props) {
        super(props)
        this.state = { title: '', text: '', postedMsg: '' }
    }

    setPostedMsg = (status,...errMsg) => status == true ? this.setState({title:'', text:'', postedMsg: <ResponseMsg value={true} text='Posted!'/>}) 
        : this.setState({title:'', text:'', postedMsg: <ResponseMsg value={false} text={errMsg}/>})

    onChange = name => value => this.setState({ [name]: value })
    _handler = {
        title: this.onChange('title'),
        text: this.onChange('text')
    }

    handleClick = () => axios({
        method: 'post',
        url: '/newPost',
        params: {
            token: this.props.token,
        },
        data: {
            title: this.state.title,
            text: this.state.text,
            comments: []
        }
    }).then(function(response){
        response.data == 'success' ? this.setPostedMsg(true) : this.setPostedMsg(false,response.data)
    }.bind(this)).catch(function(err){
        console.log(err)
    })

    render() {
        return (
            <NewPostMainDiv>
                Title: <input type='textfield' value={this.state.title} onChange={event => this._handler.title(event.target.value)}></input>
                <BlogTextArea value={this.state.text} onChange={event => this._handler.text(event.target.value)} />
                <PostButton onClick={this.handleClick}>Send</PostButton>
                {this.state.postedMsg}
            </NewPostMainDiv>

        );
    }

}
export default CreatePost;