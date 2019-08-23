import React from 'react';

// will this be a class or a function?
 function SignIn() {
         return (
             <div style={{background: '#3e1e04'}}>
              <div className="container" >
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
                             <button className="btn btn-sm " name="submit" type="submit" style={{
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
                                 <button className="btn btn-sm " name="Submit" type="Submit" style={{
                                     width: '96%',
                                     marginLeft: '3%',
                                     flexGrow: '0.45',
                                     background: '#40e0d0'
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

export default SignIn;

{/*<div className="container">*/}
{/*    <div className="jumbotron" style="background: #40e0d0">*/}

{/*        <h1>Coffee and Tiquila</h1></div>*/}

{/*    <form className="form-signin" th:action="@{/signin}" method="post">*/}
{/*        <h3 className="form-signin-heading" style="text-align: center; color: #40e0d0">Please Sign In</h3>*/}
{/*        <p>*/}
{/*            <label htmlFor="username" className="sr-only">Username</label>*/}
{/*            <input style="background: #40e0d0; border: #40e0d0" type="text" id="username" name="username"*/}
{/*                   className="form-control" placeholder="Username">*/}
{/*        </p>*/}
{/*        <p>*/}
{/*            <label htmlFor="password" className="sr-only">Password</label>*/}
{/*            <input style="background: #40e0d0; border: #40e0d0;" type="password" id="password" name="password"*/}
{/*                   className="form-control" placeholder="Password">*/}
{/*        </p>*/}
{/*        <div style="display: flex; justify-content: space-between">*/}
{/*            <!--Sign In Button-->*/}
{/*            <div style="width: 50%; align-content: flex-start">*/}
{/*                <form>*/}
{/*                    <button className="btn btn-sm " name="submit" type="submit"*/}
{/*                            style="width: 96%; margin-right: 3%; flex-grow: 0.45; background: #40e0d0">Sign In*/}
{/*                    </button>*/}
{/*                </form>*/}
{/*            </div>*/}

{/*            <!--Sign Up (Redirect) Button-->*/}
{/*            <div style="width: 50%; align-content: flex-end">*/}
{/*                <form th:action="@{/signup}" method="get">*/}
{/*                    <button className="btn btn-sm " name="Submit" type="Submit"*/}
{/*                            style="width: 96%; margin-left: 3%; flex-grow: 0.45; background: #40e0d0">Sign Up*/}
{/*                    </button>*/}
{/*                </form>*/}
{/*            </div>*/}

{/*        </div>*/}
{/*    </form>*/}

{/*</div>*/}
