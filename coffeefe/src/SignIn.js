import React, {Component} from 'react';
//import Navbar from './Navbar'
//import './src/App.js';
import './SignIn.css'


 class SignIn extends Component{
     render() {
         return (
             <div className="signinpage">
                 <div>
                     <div className="styles">
                         <h1>Coffee and Tiquila</h1></div>
                     <form className="form-signin" method="post">
                         <h3 className="form-signin-heading" style={{textAlign: 'center', color: '#f2dfabd'}}>Can we get a name for your order?
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
                                 <button onClick={SignIn} className="btn btn-sm " name="submit" type="submit" style={{
                                     width: '96%',
                                     marginRight: '3%',
                                     flexGrow: '0.45',
                                     background: '#f2dfab'
                                 }}>Sign In
                                 </button>
                             </div>
                             {/*Sign Up (Redirect) Button*/}
                             <div style={{width: '50%', alignContent: 'flex-end'}}>
                                 <form method="get">
                                     {/*onClick={SignUp} put below when SignUp component is in Src folder*/}
                                     <button  className="btn btn-sm " name="Submit" type="Submit"
                                             style={{
                                                 width: '96%',
                                                 marginLeft: '3%',
                                                 flexGrow: '0.45',
                                                 background: '#f2dfab'
                                             }}>Sign Up
                                     </button>
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
