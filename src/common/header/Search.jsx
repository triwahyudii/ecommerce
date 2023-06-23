import React from "react";
import logo from "../../assets/Logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Search = () => {
    return (
        <>
            <Router>
                <section className="search">
                    <div className="container c_flex">
                        <div className="logo width">
                            <img src={logo} alt="" />
                        </div>

                        <div className="search-box f_flex">
                            <i className="fa fa-search"></i>
                            <input type="text" placeholder="Search here" />
                            <span>All Category</span>
                        </div>

                        <div className="icon f_flex width">
                            <i className="fa fa-user icon_circle"></i>
                            <div className="cart">
                                <Link to="/cart">
                                    <i className="fa fa-shopping-bag icon_circle"></i>
                                    <span>0</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </Router>
        </>
    )
}

export default Search