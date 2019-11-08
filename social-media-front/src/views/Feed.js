import React, { Component } from 'react';

import NewPost from '../components/newPost/index';
import Navbar from '../components/navbar/index';

class Feed extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <NewPost />
            </React.Fragment>
        );
    }
}

export default Feed