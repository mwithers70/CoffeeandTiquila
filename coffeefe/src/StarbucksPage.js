import React, {Component} from 'react';
import axios from 'axios';
import Starbucks from './Starbucks.js';
import Navbarp from './Navbar';

const API_URL1 = "http://localhost:8080/products1";

class StarbucksPage extends Component{
    constructor(props){
        super(props)
        this.state= {
            products_1: []
        }
        this.getAllProducts_1 = this.getAllProducts_1.bind(this);
    }

    componentDidMount() {
        this.getAllProducts_1();
    }

    getAllProducts_1(){
        axios.get(API_URL1)
            .then(
                response_1 => {
                    console.log(response_1.data);
                    this.setState({
                        products_1: response_1.data
                    })
                }
            )
    }

    render(){
        return(
            <div>
                <Navbarp/>
                {this.state.products_1.map(function(product_1){
                    return(
                        <Starbucks name={product_1.name} price={product_1.price} quantity={product_1.quantity} description={product_1.description} brand={product_1.brand} category={product_1.category} image={product_1.image} ></Starbucks>
                    )
                })}
            </div>
        )
    }
}
export default StarbucksPage;
