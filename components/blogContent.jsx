import React from 'react'
import BlogPost from './blogPost.jsx'
import styled from 'styled-components'
import axios from 'axios'

const BlogDiv = styled.div`
  
    display:flex;
    flex-direction:column;
    align-items:center

`;


class blogContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {posts: [{title:'', text:'', comments:['']}]}
    }
    render() {
        return (
            <BlogDiv>
                {this.state.posts.map((post,index) => <BlogPost key={index} title={post.title} text={post.text} comments={post.comments}/>)}
            </BlogDiv>
        );
    }
    componentDidMount() {
        axios.get('/getBlogPosts?number=5')
            .then(function (response) {                
                this.setState({posts:  response.data })
                
            }.bind(this))
    }

}

export default blogContent;