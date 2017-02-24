import {Router, Route, browserHistory,IndexRoute} from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'
import BlogContent from './blogContent.jsx'
import CreatePost from './CreatePost.jsx'
import Contact from './Contact.jsx'
import Login from './Login.jsx'
const routes = (
    <Route path = "/" component={App}>
        <IndexRoute component={BlogContent}/>
        <Route path = "/blog" component={BlogContent}/>
        <Route path = "/contact" component = {Contact}/>
        <Route path = "/newpost" component={CreatePost}/>
        <Route path = "/login" component={Login}/>
    </Route>

);


ReactDOM.render(<Router history={browserHistory} routes={routes}/>, 
    document.getElementById('entry'))