import React, {Component} from 'react';
import axios from 'axios';
import Product from './Product.js';
import Navbarp from './Navbar';

const API_URL = "http://localhost:8080/products";

class ProductPage extends Component{
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
                        <Product name={product.name} price={product.price} quantity={product.quantity} description={product.description} brand={product.brand} category={product.category} image={product.image} ></Product>
                    )
                })}
            </div>
        )
    }
}
 export default ProductPage;
