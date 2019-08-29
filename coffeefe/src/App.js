import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './Components/SignIn';
import './css/App.css'
import './css/SignIn.css'
import About from './Components/About';
import CoffeeShops from "./Components/CoffeeShops";
import NotJustCoffeePage from './Components/NotJustCoffeePage';
import StarbucksPage from './Components/StarbucksPage';
import AmeliesPage from "./Components/AmeliesPage";
import SignUp from "./Components/SignUp";
import OrderSummary from "./Components/OrderSummary";




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
            <Route path= '/ordersummary' exact={true} component={OrderSummary}/>
            </Switch>
            </Router>

        )
    }
}

export default App;
