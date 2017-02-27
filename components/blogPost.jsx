import React from 'react';
import styled from 'styled-components'
import CommentBox from './CommentBox.jsx'

const BlogPostDiv = styled.div`
    border-bottom:solid 0.5px rgba(65, 136, 244, .5);
    align-self:flex-center;
    width:50%;
    padding-bottom:2%;
`

const Title = styled.h1`
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
    color: rgb(65, 136, 244);
    font-size: 2.5em;
`

const Text = styled.span`
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
	font-size: 17px;
	font-style: normal;
	font-variant: normal;
	font-weight: 400;
	line-height: 20px;
   

`
class BlogPost extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <BlogPostDiv>
                <Title>{this.props.title}</Title>
                <Text>{this.props.text}</Text>
                <CommentBox comments={this.props.comments.reverse()} title={this.props.title}/>
            </BlogPostDiv>

        );
    }


}
export default BlogPost;