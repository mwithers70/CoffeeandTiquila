import React, {Component} from 'react';
import axios from 'axios';
import Amelies from './Amelies.js';
import Navbarp from './Navbar';

const API_URL2 = "http://localhost:8080/products2";

class AmeliesPage extends Component{
    constructor(props){
        super(props)
        this.state= {
            products2: []
        }
        this.getAllProducts2 = this.getAllProducts2.bind(this);
    }

    componentDidMount() {
        this.getAllProducts2();
    }

    getAllProducts2(){
        axios.get(API_URL2)
            .then(
                response => {
                    console.log(response.data);
                    this.setState({
                        products2: response.data
                    })
                }
            )
    }

    render(){
        return(
            <div>
                <Navbarp/>
                {this.state.products2.map(function(products2){
                    return(
                        <Amelies name={products2.name} price={products2.price} quantity={products2.quantity} description={products2.description} brand={products2.brand} category={products2.category} image={products2.image} ></Amelies>
                    )
                })}
            </div>
        )
    }
}

export default AmeliesPage;
