
const { createStore } = require("redux")
// 初始化数据
const initialState = {
  name: "shine",
  counter: 100
}

// 定义reducer函数: 纯函数
// 两个参数: 
// 参数一: store中目前保存的state
// 参数二: 本次需要更新的action(dispatch传入的action)
// 返回值: 它的返回值会作为store之后存储的state
function renducer(state = initialState, action) {
  // console.log('renducer', state, action);
  switch (action.type) {
    case 'change_name':
      return {...state, name: action.name}
    case 'change_counter':
      return {...state, counter: state.counter + action.num}
    default:
      return state // 返回值会作为新的state值存到store中
  }
}

// 创建Store来存储这个state
const store = createStore(renducer)

module.exports = store