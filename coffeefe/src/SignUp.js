import React, { Component } from 'react';
import SignIn from "./SignIn";

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
            <div style={{background: '#3e1e04'}}>
                <div className="container">
                    <div className="jumbotron" style={{background: '#40e0d0'}}>
                        <h1>Coffee and Tiquila</h1></div>
                    <form className="form-signin" method="post">
                        <h3 className="form-signin-heading" style={{textAlign: 'center', color: '#40e0d0'}}>Please Sign
                            In</h3>
                        <p>
                            <label htmlFor="fnli" className="sr-only">Firstname & Last Initial</label>
                            <input style={{background: '#40e0d0', border: '#40e0d0'}} type="text" id="fnli"
                                   name="username" className="form-control" onChange = {(event,newValue) => this.setState({first_name:newValue})}
                                   placeholder="Firstname & Last Initial"/>
                        </p>

                        <p>
                            <label htmlFor="username" className="sr-only">Username</label>
                            <input style={{background: '#40e0d0', border: '#40e0d0'}} type="text" id="username"
                                   name="username" className="form-control" onChange = {(event,newValue) => this.setState({username:newValue})}
                                   placeholder="Username"/>
                        </p>
                        <p>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input style={{background: '#40e0d0', border: '#40e0d0'}} type="password" id="password"
                                   name="password" className="form-control" onChange = {(event,newValue) => this.setState({password:newValue})}
                                   placeholder="Password"/>
                        </p>
                        <p>
                            <label htmlFor="team" className="sr-only">Team</label>
                            <input style={{background: '#40e0d0', border: '#40e0d0'}} type="text" id="team"
                                   name="team" className="form-control" onChange = {(event,newValue) => this.setState({team:newValue})}
                                   placeholder="Team"/>
                        </p>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            {/*Sign In Button*/}
                            <div style={{width: '50%', alignContent: 'flex-start'}}>
                                <button  onClick={(event) => this.handleClick(event)} className="btn btn-sm " primary={true} type="submit" style={{
                                    width: '96%',
                                    marginRight: '3%',
                                    flexGrow: '0.45',
                                    background: '#40e0d0'
                                }}>Sign In
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
