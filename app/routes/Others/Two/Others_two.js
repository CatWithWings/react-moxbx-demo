import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

@inject('store') @observer
export default class OthersTwo extends Component{
    render(){
        return (
            <div>
                others two
            </div>
        )
    }
}

OthersTwo.propTypes = {
};