import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { NavLink, withRouter } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

@withRouter @inject('store') @observer
export default class Others extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    
    render(){
        return (
            <div className="others-wapper">
                <nav className="others-submenu">
                    <ul>
                        <li>
                            <NavLink to="/others/one" 
                                activeClassName="active">Others One</NavLink>
                        </li>
                        <li>
                            <NavLink to="/others/two"
                                activeClassName="active">Others Two</NavLink>
                        </li>
                    </ul>
                </nav>
                <section className="others-content">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

Others.propTypes = {
};