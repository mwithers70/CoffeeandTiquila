import React, {Component} from 'react';
import '../css/SignIn.css'


class Starbucks extends Component{
    // constructor(props) {
    //     super(props);
    // }

    render()
    {
        let nameElement, priceElement, descriptionElement, brandElement, categoryElement,
            imageElement;
        nameElement = this.props.name;
        priceElement = this.props.price;
        descriptionElement = this.props.description;
        brandElement = this.props.brand;
        categoryElement = this.props.category;
        imageElement = this.props.image;

        return (
            <div className="container">
                <div className="card mb-2 large-product-card">
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className="card-title">
                                <img  className="card-img" src={`.${imageElement}`}/>
                                <div className="card-body">
                                    <h3 className="card-text">{nameElement}</h3>
                                    <p className="card-text">{descriptionElement}</p>
                                    <p className="card-text">{brandElement}</p>
                                    <p className="card-text">{categoryElement}</p>
                                    <p className="card-text">{priceElement}</p>
                                    <button className="btn-md">Add Me Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Starbucks;
