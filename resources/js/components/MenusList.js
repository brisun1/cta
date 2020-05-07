// resources/assets/js/components/menusList.js

import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class MenusList extends Component {
    constructor() {
        super();
        this.state = {
            menus: []
        };
    }

    componentDidMount() {
        axios.get("/menus").then(response => {
            this.setState({
                menus: response.data
            });
        });
    }

    render() {
        const { menus } = this.state;
        return (
            <div className="container py-4">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">All menus</div>
                            <div className="card-body">
                                <Link
                                    className="btn btn-primary btn-sm mb-3"
                                    to="/create"
                                >
                                    Create new menu
                                </Link>
                                <ul className="list-group list-group-flush">
                                    {menus.map(menu => (
                                        <Link
                                            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
                                            to={`/${menu.id}`}
                                            key={menu.id}
                                        >
                                            {menu.name}
                                            <span className="badge badge-primary badge-pill">
                                                {menu.tasks_count}
                                            </span>
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MenusList;
