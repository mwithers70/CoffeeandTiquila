import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import BeginOrder from './BeginOrder';
import About from './About';
import Menu from '.Menu';
import OrderSummary from './OrderSummary';
import Product from './Product';
import Registration from './Registration';
import Navbar from './Navbar';


class App extends Component{
    render(){
        return(
            <Router>
            <Switch>
                <Route path='/' exact={true} component={SignIn}/>
                <Route path='/beginOrder' exact={true} component={BeginOrder}/>
                <Route path='/about' exact={true} component={About}/>
                <Route path='/menu' exact={true} component={Menu}/>
                <Route path='/orderSummary' exact={true} component={OrderSummary}/>
                <Route path='/product' exact={true} component={Product}/>
                <Route path='/registration' exact={true} component={Registration}/>
            </Switch>
            </Router>

        )
    }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
