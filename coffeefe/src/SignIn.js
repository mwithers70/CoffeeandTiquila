import React, {Component} from 'react';
import SignUp from "./SignUp";
import {Link} from "react-router-dom";
//import Navbar from './Navbar'
//import './src/App.js';


 class SignIn extends Component{
     render() {
         return (
             <div style={{background: '#3e1e04'}}>
                 <div className="container">
                     <div className="jumbotron" style={{background: '#40e0d0'}}>
                         <h1>Coffee and Tiquila</h1></div>
                     <form className="form-signin" method="post">
                         <h3 className="form-signin-heading" style={{textAlign: 'center', color: '#40e0d0'}}>Please Sign
                             In</h3>
                         <p>
                             <label htmlFor="username" className="sr-only">Username</label>
                             <input style={{background: '#40e0d0', border: '#40e0d0'}} type="text" id="username"
                                    name="username" className="form-control" placeholder="Username"/>
                         </p>
                         <p>
                             <label htmlFor="password" className="sr-only">Password</label>
                             <input style={{background: '#40e0d0', border: '#40e0d0'}} type="password" id="password"
                                    name="password" className="form-control" placeholder="Password"/>
                         </p>
                         <div style={{display: 'flex', justifyContent: 'space-between'}}>
                             {/*Sign In Button*/}
                             <div style={{width: '50%', alignContent: 'flex-start'}}>
                                 <button onClick={SignIn} className="btn btn-sm " name="submit" type="submit" style={{
                                     width: '96%',
                                     marginRight: '3%',
                                     flexGrow: '0.45',
                                     background: '#40e0d0'
                                 }}>Sign In
                                 </button>
                             </div>
                             {/*Sign Up (Redirect) Button*/}
                             <div style={{width: '50%', alignContent: 'flex-end'}}>
                                 <form method="get">
                                     {/*onClick={SignUp} put below when SignUp component is in Src folder*/}
                                     <button className="btn btn-sm " name="Submit" type="Submit"
                                             style={{
                                                 width: '96%',
                                                 marginLeft: '3%',
                                                 flexGrow: '0.45',
                                                 background: '#40e0d0'
                                             }}><Link to='signup'> Sign Up</Link> </button>
                                 </form>
                             </div>
                         </div>
                     </form>
                 </div>
             </div>
         );
     }
 }
//this is the first commit for the master-react branch

export default SignIn;
