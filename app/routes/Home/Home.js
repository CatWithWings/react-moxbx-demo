import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import GetAsyncData from './Get_async_data';

/*
 * withRouter获取routerd的location和history
 * 不需要使用router,可以不写
 */
@withRouter @inject('store') @observer
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){
        console.log(this.props)
        this.props.store.homeStore.getAsyncData();
    }

    addOne(){
        let data = 'test';
        this.props.store.homeStore.add(data);  
    }

    render(){
        const { count, asyncData, asyncDataResult } = this.props.store.homeStore;

        return (
            <div className="home-content">
                <h3>home</h3>
                <div>
                    <span>{count}</span>
                    &nbsp;
                    <button type="button"
                        onClick={this.addOne.bind(this)}>+</button>
                </div>
                <GetAsyncData source={asyncData}
                    result={asyncDataResult} />
            </div>
        )
    }  
}

Home.propTypes = {
    count:  PropTypes.number,
    add: PropTypes.func,
    asyncData: PropTypes.string,
    asyncDataResult: PropTypes.string,
    getAsyncData: PropTypes.func,
};