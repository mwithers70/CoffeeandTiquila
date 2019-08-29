import React, {Component} from 'react';
import Navbarp from './Navbar';
import '../css/SignIn.css'
// import { * } from 'bootstrap';
// import { * } from 'react-router-dom';
import AmeliesStorefront from '../Images/AmeliesStorefront.jpg';
import StarbucksStorefront from '../Images/StarbucksStorefront.jpg';
import NJCStorefront from '../Images/NJCStorefront.jpg';


class CoffeeShops extends Component{
    render()
    {
        return (
            <div>
                <Navbarp/>
                <div className="googlemap">
                    <iframe width={1527} height={450} frameBorder={0} style={{border: 0}} alt={"map"}
                            src="https://www.google.com/maps/d/u/0/embed?mid=1hJZ8hM8pnif0_0d7N8XR2lt989YGabn0">
                    </iframe>
                </div>

                <div className="card-group">
                    <div className="card">
                        <img className="card-img-top" src={NJCStorefront} alt="NJC storefront"/>
                        <div className="card-body">
                            <h5 className="card-title">Not Just Coffee</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <button className="btn-lg "><a href="/notjustcoffee">Order Not Just
                                    Coffee »</a></button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Powered By Coffee &amp; Tiquila</small>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={StarbucksStorefront} alt="Starbucks storefront" style={{height: 350.88, width:526.33}}/>
                        <div className="card-body">
                            <h5 className="card-title">Starbucks</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to
                                additional
                                content.</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <button className="btn-lg "><a href="/starbucks">Order Starbucks »</a></button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Powered By Coffee &amp; Tiquila</small>
                        </div>
                    </div>

                    <div className="card">
                        <img className="card-img-top" src={AmeliesStorefront} alt="Amelie's storefront"/>
                        <div className="card-body">
                            <h5 className="card-title">Amelie's</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural
                                lead-in to
                                additional content. This card has even longer content than the first to show that equal
                                height action.</p>
                        </div>
                        <div className="container">
                            <div className="row">
                                <button className="btn-lg "><a href="/amelies">Order Amelie's »</a></button>
                            </div>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Powered By Coffee &amp; Tiquila</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default CoffeeShops;
