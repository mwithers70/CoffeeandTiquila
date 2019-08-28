import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import About from './About';
import CoffeeShops from "./CoffeeShops";
import NotJustCoffeePage from './NotJustCoffeePage';
import StarbucksPage from './StarbucksPage';
import AmeliesPage from "./AmeliesPage";
import SignUp from "./SignUp";




class App extends Component{
    render(){
        return(
            <Router>
            <Switch>
            <Route path='/' exact={true} component={SignIn}/>
            <Route path='/signup' exact={true} component={SignUp}/>
            <Route path='/about' exact={true} component={About}/>
            <Route path='/coffeeshops' exact={true} component={CoffeeShops}/>
            <Route path='/notjustcoffee' component={NotJustCoffeePage}/>
            <Route path='/starbucks' component={StarbucksPage}/>
            <Route path='/amelies' exact={true} component={AmeliesPage}/>
            </Switch>
            </Router>

        )
    }
}

export default App;
