import React, {Component} from 'react';

//import { Link } from 'react-router-dom';

class BeginOrder extends Component {
    render() {
        return (
            <div className="card-group">
                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"> Not Just Coffee </h5>
                        <p className="card-text">This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <button btn btn-lg>Not Just Coffee</button>
                        </div>
                    </div>
                    <div className="card-footer"><small className="text-muted"> Powered By Coffee && Tiquila </small>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"> Starbucks </h5>
                        <p className="card-text">This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <button btn btn-lg>Starbucks</button>
                        </div>
                    </div>
                    <div className="card-footer"><small className="text-muted"> Powered By Coffee && Tiquila </small>
                    </div>
                </div>

                <div className="card">
                    <img className="card-img-top" src="..." alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title"> Amelie's </h5>
                        <p className="card-text">This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <div className="container">
                        <div className="row">
                            <button btn btn-lg>Amelie's</button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted"> Powered By Coffee && Tiquila </small>
                    </div>
                </div>
            </div>
        );
    }
}
export default BeginOrder;
