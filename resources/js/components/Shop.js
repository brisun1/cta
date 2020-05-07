import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

class Shop extends Component {
    //state = {};
    constructor() {
        super();
        this.state = {
            shops: []
        };
    }
    componentDidMount() {
        axios
            .get("/api/shop")
            .then(response => {
                this.setState({
                    shops: response.data
                });
            })
            .catch(errors => {
                console.log(errors);
            });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Shop Component</div>

                            <div className="card-body text-danger">
                                I'm an component shop!
                            </div>
                            <ul>
                                {this.state.shops.map(shop => (
                                    <li key={shop.shop_id}>
                                        Shop Name:{shop.name} Address:
                                        {shop.addr}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Shop;

if (document.getElementById("shop")) {
    ReactDOM.render(<Shop />, document.getElementById("shop"));
}
