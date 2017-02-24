import React from 'react'
import ReactDOM from 'react-dom'
import BlogContent from './blogContent.jsx'
import Contact from './Contact.jsx'
import CreatePost from './CreatePost.jsx'
import AppBar from './AppBar.jsx'
import Login from './Login.jsx'
class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {user:null, token:""}  
    }
 
    render() {
        return( 
            <div>
                <AppBar user = {this.state.user}/>
                {React.Children.map(this.props.children, child => React.cloneElement(child, { token: this.state.token, onChange: (user,token) => this.setState({user:user,token:token}) }))}
            </div>
        );
    }

}
export default App;