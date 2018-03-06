import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

@inject('store') @observer
export default class NoMatch extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                404
            </div>
        )
    }
}

NoMatch.propTypes = {
};