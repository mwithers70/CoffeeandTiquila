import React, {Component} from 'react';
import axios from 'axios';
import Amelies from './Amelies.js';
import Navbarp from './Navbar';

const API_URL = "http://localhost:8080/products";

class AmeliesPage extends Component{
    constructor(props){
        super(props)
        this.state= {
            products: []
        }
        this.getAllProducts = this.getAllProducts.bind(this);
    }

    componentDidMount() {
        this.getAllProducts();
    }

    getAllProducts(){
        axios.get(API_URL)
            .then(
                response => {
                    console.log(response.data);
                    this.setState({
                        products: response.data
                    })
                }
            )
    }

    render(){
        return(
            <div>
                <Navbarp/>
                {this.state.products.map(function(product){
                    return(
                        <Amelies name={product.name} price={product.price} quantity={product.quantity} description={product.description} brand={product.brand} category={product.category} image={product.image} ></Amelies>
                    )
                })}
            </div>
        )
    }
}

export default AmeliesPage;
