import fetch from 'isomorphic-fetch';

// 带参数的url
export function param(url, params){
    let paramsArray = [];

    Object.keys(params).forEach(key => paramsArray.push(key + '=' + encodeURIComponent(params[key])));

    if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&')
    } else {
         url += '&' + paramsArray.join('&')
    }

    return url;
}

// POST/PUT
function change(resolve, reject, options){
    return fetch(options.url, {
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json'
        },
        method: options.method,
        mode: 'cors',
        body: JSON.stringify(options.data || {})
    })
    .then(response => {
        resolve(response.json());
    })
    .catch( err =>{
        reject(err);
    })
}

// GET/DELETE
function gain(resolve, reject, options){
    let url = options.url;

    if(options.params){
        url = param(url, options.params);
    }

    return fetch(url, {
        credentials: "same-origin",
        mode: 'cors',
        method:options.method
    })
    .then(response => {
        resolve(response.json())
    })
    .catch(err => {
        reject(err);
    })
}

export async function Post (url, data){
    return new Promise(function (resolve, reject) {
        let options = {url, data, method: 'POST'}
        change(resolve, reject, options)
    });
}

export async function Put (url, data){
    return new Promise(function (resolve, reject) {
        let options = {url, data, method: 'PUT'}
        change(resolve, reject, options)
    });
}

export async function Get(url, params){
    return new Promise(function (resolve, reject) {
        let options = {url, params, method: 'GET'}
        gain(resolve, reject, options)
    });
}

export async function Delete (url, params){
    return new Promise(function (resolve, reject) {
        let options = {url, params, method: 'DELETE'}
        gain(resolve, reject, options)
    });
}
