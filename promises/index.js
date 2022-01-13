'use strict'

const fs = require('fs')
const path = require('path')

const readFile = (filePath, charset) => new Promise((resolve, reject) => {
    fs.readFile(filePath, charset, (err, result) => {
        if(err) return reject(err)
        resolve(result)
    })
})

readFile(path.join(__dirname, '.', 'package.json'), 'utf8',)
    .then((result) => console.log(result))
    .catch((error) => console.log('ERROR: ', error))