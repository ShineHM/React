const reducer = require('./reducer')

const { createStore } = require('redux')

const storeHoc = createStore(reducer)

module.exports = storeHoc