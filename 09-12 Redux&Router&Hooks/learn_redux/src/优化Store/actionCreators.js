const { CHANGE_NAME, CHANGE_COUNTER } = require('./constants')

const changeNameAction = (name => ({ type: CHANGE_NAME, name }))
const changeCounterAction = (num => ({ type: CHANGE_COUNTER, num }))

module.exports = {
  changeNameAction,
  changeCounterAction
}