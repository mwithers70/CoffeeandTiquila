import React, {Component} from 'react';
import Navbarp from './Navbar'
import '../App.js';
import '../css/SignIn.css'
import './CoffeeShops'
import CoffeeShops from "./CoffeeShops";
import Navbar from "reactstrap/es/Navbar";


 class SignIn extends Component{
     render() {
         return (

             <div>
                 <Navbarp/>
                 <div className="signinpage">
                     <div className="styles">
                         <div>
                             <h1>Coffee and Tiquila</h1></div>
                     <form className="form-signin" method="post">
                         <h3 className="form-signin-heading" style={{textAlign: 'center', color: '#f2dfab'}}>Can we get a name for your order?
                             </h3>
                         <p>
                             <label htmlFor="username" className="sr-only">Username</label>
                             <input style={{background: '#f2dfab', border: '#f2dfab'}} type="text" id="username"
                                    name="username" className="form-control" placeholder="Username"/>
                         </p>
                         <p>
                             <label htmlFor="password" className="sr-only">Password</label>
                             <input style={{background: '#f2dfab', border: '#f2dfab'}} type="password" id="password"
                                    name="password" className="form-control" placeholder="Password"/>
                         </p>
                         <div style={{display: 'flex', justifyContent: 'space-between'}}>
                             {/*Sign In Button*/}
                             <div style={{width: '50%', alignContent: 'flex-start'}}>
                                 <button onClick={CoffeeShops} className="btn btn-sm " name="submit" type="submit" style={{
                                     width: '96%',
                                     marginRight: '3%',
                                     flexGrow: '0.45',
                                     background: '#f2dfab'
                                 }}><a href="./coffeeshops">Sign In</a>
                                 </button>
                             </div>
                             {/*Sign Up (Redirect) Button*/}
                             <div style={{width: '50%', alignContent: 'flex-end'}}>
                                 <form method="get">
                                     {/*onClick={SignUp} put below when SignUp component is in Src folder*/}
                                     <button  className="btn btn-sm " name="Submit" type="Submit" onClick={'/SignUp'}
                                             style={{
                                                 width: '96%',
                                                 marginLeft: '3%',
                                                 flexGrow: '0.45',
                                                 background: '#f2dfab'
                                             }}><a href="/SignUp">Sign Up
                                     </a></button>
                                 </form>
                             </div>
                         </div>
                     </form>
                 </div>
                 </div>
             </div>
         );
     }
 }

export default SignIn;
