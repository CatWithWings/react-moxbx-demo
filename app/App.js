import React, { Component }  from 'react';
import { NavLink } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import PropTypes from 'prop-types';

@inject('store') @observer
export default class App extends Component{
    render(){
        return (
            <div className="main-wapper">
                <header className="main-header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home"
                                    activeClassName="active">Home</NavLink>
                                </li>
                            <li>
                                <NavLink to="/others"
                                    activeClassName="active">Others</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="main-content">
                    {this.props.children}
                </section>
                <foot className="main-foot">
                    Copyright © 2013-2017 company's name   company's website All Rights Reserved. 备案号：XXX
                </foot>
            </div>
        )
    } 
}

App.propTypes = {
};