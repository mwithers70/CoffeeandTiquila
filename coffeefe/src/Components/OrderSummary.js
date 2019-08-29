import React, {Component} from 'react'
import '../css/SignIn.css'


class OrderSummary extends Component{
    render() {
        return (
            <div>
                <div className="styles fixHeight" >
                <h1>Order Summary</h1>

                <button className="btn-lg "><a href="./coffeeshops"> Go back to select your coffee </a></button>
                </div>
            </div>
        );
    }

}
export default OrderSummary;
