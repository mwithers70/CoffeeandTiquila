import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import About from './About';
import CoffeeShops from "./CoffeeShops";



class App extends Component{
    render(){
        return(
            <Router>
            <Switch>
            <Route path='/' exact={true} component={SignIn}/>
            <Route path='/about' exact={true} component={About}/>
            <Route path='/coffeeshops' exact={true} component={CoffeeShops}/>
            </Switch>
            </Router>

        )
    }
}

export default App;
