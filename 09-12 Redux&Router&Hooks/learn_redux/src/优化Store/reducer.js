const { CHANGE_NAME, CHANGE_COUNTER } = require('./constants')

const initialState = {
  name: 'shine',
  counter: 100
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {...state, name: action.name}
    case CHANGE_COUNTER:
      return {...state, counter: state.counter + action.num}
    default:
      return state
  }
}

module.exports = reducer