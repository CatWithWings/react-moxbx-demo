import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('store') @observer
export default class OthersOne extends Component{

    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div>
                others one
            </div>
        )
    }
}

OthersOne.propTypes = {
};