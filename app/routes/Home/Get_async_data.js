import React from 'react';
import PropTypes from 'prop-types';
import { observer, inject } from 'mobx-react';

function GetAsyncData(props){
    const { source, result } = props;

    return (
        <div>
            <p>异步获取数据：{source}</p>
            <p>获取结果：{result}</p>
        </div>
    )
}

GetAsyncData.propTypes = {
    source: PropTypes.string,
    result: PropTypes.string
}; 

export default GetAsyncData;