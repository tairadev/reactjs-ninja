'use strict'

const map = (arr = [], func = () => {}) => {
    if(!Array.isArray(arr))
        throw new TypeError('arr is not an array')
    
    if(typeof func !== 'function')
        throw new TypeError('func is not a function')

    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(func(arr[i], i, arr))
    }
    return newArr
}

export default map