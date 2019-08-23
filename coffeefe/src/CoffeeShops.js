import React, {Component} from 'react';

class CoffeeShops extends Component {
   render() {
       return (
           <div>
               <div>
                   <iframe width={600} height={450} frameBorder={0} style={{border: 0}}
                           src="https://www.google.com/maps/d/u/0/embed?mid=1hJZ8hM8pnif0_0d7N8XR2lt989YGabn0">
                   </iframe>
               </div>
               <div className="card-group">
                   <div className="card">
                       <img className="card-img-top" src="..." alt="Card image cap"/>
                       <div className="card-body">
                           <h5 className="card-title">Not Just Coffee</h5>
                           <p className="card-text">This is a wider card with supporting text below as a natural
                               lead-in to
                               additional content. This content is a little bit longer.</p>
                       </div>
                       <div className="container">
                           <div className="row">
                               <p><a className="btn btn-primary btn-lg" href="/notjustcoffee" role="button">Not Just
                                   Coffee
                                   Order »</a></p>
                           </div>
                       </div>
                       <div className="card-footer">
                           <small className="text-muted">Powered By Coffee &amp;&amp; Tiquila</small>
                       </div>
                   </div>
                   <div className="card">
                       <img className="card-img-top" src="..." alt="Card image cap"/>
                       <div className="card-body">
                           <h5 className="card-title">Starbucks</h5>
                           <p className="card-text">This card has supporting text below as a natural lead-in to
                               additional
                               content.</p>
                       </div>
                       <div className="container">
                           <div className="row">
                               <p><a className="btn btn-primary btn-lg" href="/starbucks" role="button">Starbucks Order
                                   »</a></p>
                           </div>
                       </div>
                       <div className="card-footer">
                           <small className="text-muted">Powered By Coffee &amp;&amp; Tiquila</small>
                       </div>
                   </div>
                   <div className="card">
                       <img className="card-img-top" src="..." alt="Card image cap"/>
                       <div className="card-body">
                           <h5 className="card-title">Amelie</h5>
                           <p className="card-text">This is a wider card with supporting text below as a natural
                               lead-in to
                               additional content. This card has even longer content than the first to show that equal
                               height action.</p>
                       </div>
                       <div className="container">
                           <div className="row">
                               <p><a className="btn btn-primary btn-lg" href="/othercafe" role="button">Amelie Order
                                   »</a>
                               </p>
                           </div>
                       </div>
                       <div className="card-footer">
                           <small className="text-muted">Powered By Coffee &amp;&amp; Tiquila</small>
                       </div>
                   </div>
               </div>
           </div>
        );
    }
}

export default CoffeeShops;
