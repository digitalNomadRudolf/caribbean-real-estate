import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';


export default class NavBar extends Component {
    state={
        isOpen:false
    }

    handleTogggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render() {
        return (
            <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            Caribbean Property Finder
                        </Link>
                    </div>
                </div>
                <button 
                            type="button" 
                            className="nav-btn"
                            onClick={this.handleTogggle}>
                            <FaAlignRight className="nav-icon" />
                </button>
                <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                        <li>
                            <Link to="/">
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/properties">
                                Properties
                            </Link>
                        </li>
                    </ul>
            </nav>
            </>
        )
    }
}
