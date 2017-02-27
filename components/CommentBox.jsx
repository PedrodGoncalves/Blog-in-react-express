import React from 'react'
import styled, { keyframes } from 'styled-components'
import axios from 'axios'
import Comment from './Comment.jsx'
import NewComment from './NewComment.jsx'

const MainDiv = styled.div`

`
const Title = styled.h3`
    padding-top:2%;
`
const Comments = styled.div`
    padding-top:1%;

`
const OptionsSpan = styled.span`
    cursor:pointer;
    &:hover{
        text-decoration:underline;
    }

`

const animatePost = keyframes`
  from {
        opacity:0;
  }
  to {
        opacity:1;
  }

`
const NewCommentDiv = styled.div`
            
         color:green;
        
         animation: ${animatePost} 2s linear;

`

class CommentBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = { newComment: false, illusionComment: '', statusMsg: '', maxComments: '3' }
    }

  
    render() {
        return (
            <MainDiv>
                <Title>
                    Comments
                </Title>

                <OptionsSpan onClick={() => this.setState({ newComment: true, statusMsg: '',illusionComment:'' })}> 
                    Post a comment. </OptionsSpan>
                <OptionsSpan onClick={() => this.state.maxComments != '100' ? this.setState({ maxComments: '100' }) 
                    : this.setState({ maxComments: '3' })}>
                     show all {this.props.comments.length} </OptionsSpan>
                {this.state.statusMsg}
                {this.state.newComment == false ? null : <NewComment title={this.props.title}
                    updateComments={(n, t) => {
                        this.setState({
                            newComment: false, statusMsg: 'Posted!', illusionComment: <NewCommentDiv><Comment name={n} text={t} /></NewCommentDiv>
                        })
                        this.props.comments.unshift({name: n, text:t})
                    }} />}
                {this.state.illusionComment}
                {this.props.comments.map((comment, index) => index < this.state.maxComments ? <Comment key={index} name={comment.name} text={comment.text} /> : null)}


            </MainDiv>
        );
    }


}
export default CommentBox;