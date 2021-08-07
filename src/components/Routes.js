import React from 'react';

import { Switch, Router, Route} from "react-router";

import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import Home from '../pages/home/Home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute'

import {history} from '../history'; 

// const Routes = () => {
//     <Router history={history} >
//         <Switch>
//             <Route component={Login} exact path="/login" ></Route>
//             <Route component={Register} exact path="/register" ></Route>
//             <Route component={Home} exact path="/" ></Route>
//         </Switch>
//     </Router>
// }

class Routes extends React.Component{
    render(){
        return(
            <Router history={history} >
                <Switch>
                     <Route component={Login} exact path="/login" ></Route>
                     <Route component={Register} exact path="/register" ></Route>
                     <PrivateRoute component={Home} exact path="/" />
                     <PrivateRoute component={NotFound} />
                </Switch>
            </Router>
        )
    }
    
}

export default Routes;