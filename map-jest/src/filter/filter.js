'use strict';

const filter = (arr, funcao) => {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if(funcao(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }

    return newArr
}

export default filter