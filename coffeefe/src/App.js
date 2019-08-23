import React, {Component} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './SignIn';
import Product from './Product';
import ProductPage from './ProductPage';



class App extends Component{
    render(){
        return(
            <Router>
            <Switch>
            <Route path='/' exact={true} component={SignIn}/>
            <Route path='/product' component={ProductPage}/>
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
