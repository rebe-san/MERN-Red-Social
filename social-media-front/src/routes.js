import React, { Component } from 'react';

// Home

import Login from './views/Login/Login';



//Component
class App extends Component {


    render() {
        return ( < Router basename = { window.location.pathname || '' } >
            <Switch >

            <Route exact path = '/'
            component = { Login }
            /> 

            </Switch> 
            </Router >
        )
    };
}

export default App;