import React from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
    padding-top:1%;

`
const CommentName = styled.div`


`
const CommentText = styled.div`


`
class Comment extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return(
        <MainDiv>
            <CommentName>{this.props.name}</CommentName>
            <CommentText>{this.props.text}</CommentText>
        </MainDiv>
        );
    }


}

export default Comment;