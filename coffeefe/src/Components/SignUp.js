import React, { Component } from 'react';
import SignIn from "./SignIn";
import '../css/SignIn.css'

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:'',
            username:'',
            password:'',
            team: ''

        }
    }
    render() {
        return (
            <div className="signuppage fixHeight">
                <div className="container">
                    <div><h1>Coffee and Tiquila</h1></div>
                    <form className="form-signin" method="post">
                        <h3 className="form-signin-heading" style={{textAlign: 'center', color: '#f2dfab'}}> Fill this out</h3>
                        <p>
                            <label htmlFor="fnli" className="sr-only">Firstname & Last Initial</label>
                            <input style={{background: '#f2dfab', border: '#f2dfab'}} type="text" id="fnli"
                                   name="username" className="form-control" placeholder="Firstname & Last Initial"/>
                        </p>

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
                        <p>
                            <label htmlFor="team" className="sr-only">Team</label>
                            <input style={{background: '#f2dfab', border: '#f2dfab'}} type="text" id="username"
                                   name="team" className="form-control" placeholder="Team"/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            {/*Sign In Button*/}
                            <div style={{width: '50%', alignContent: 'flex-start'}}>
                                <button  onClick={SignIn} className="btn btn-sm " primary={true} type="submit" style={{
                                    width: '96%',
                                    marginRight: '3%',
                                    flexGrow: '0.45',
                                    background: '#f2dfab'
                                }}><a href="./coffeeshops">Sign In</a>
                                </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Register;
