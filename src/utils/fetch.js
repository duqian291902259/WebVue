const axios = require('axios');

function post(url, params) {
    return new Promise((resolve, reject)=>{
        axios.post(url, params).then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    })
}

function get(url, params) {
    return new Promise((resolve, reject)=>{
        axios.get(url, {
            params:{...params}
        }).then(function (response) {
            resolve(response);
        })
        .catch(function (error) {
            reject(error);
        });
    })
}
export {post, get}

