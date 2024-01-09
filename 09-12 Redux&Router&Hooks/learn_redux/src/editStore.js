const store = require("./createStore");

// 订阅store中数据的变化,当数据变化时会执行回调并返回一个函数，调用就是取消订阅， store.getState()可以拿到store数据
// store.subscribe(()=> {
//   console.log("订阅数据的变化:", store.getState())
// })
const unsubscribe = store.subscribe(()=> {
  console.log("订阅数据的变化:", store.getState())
})

// const changeNameAction = ((name)=> {
//   // 这里没有逻辑可以缩写
//   return {type: 'change_name', name}
// })
const changeName1Action = ((name)=> ({type: 'change_name', name}))
// 修改store中的数据，只能通过action修改
store.dispatch(changeName1Action('changeName1')) // 派发action，会给到reducer的参数action

store.dispatch({type: 'change_name', name: 'changeName2'})

unsubscribe()
// 取消订阅后，这里监听不到
store.dispatch({type: 'change_counter', num: 5})


// 使用优化后的代码修改store
/**
 * redux代码优化:
 *  1.将派发的action生成过程放到一个actionCreators函数中
 *  2.将定义的所有actionCreators的函数, 放到一个独立的文件中: actionCreators.js
 *  3.actionCreators和reducer函数中使用字符串常量是一致的, 所以将常量抽取到一个独立constants的文件中
 *  4.将reducer和默认值(initialState)放到一个独立的reducer.js文件中, 而不是在index.js
 */
const storeHoc = require("./优化Store");
const { changeNameAction, changeCounterAction } = require('./优化Store/actionCreators')

const unsubscribeHoc = storeHoc.subscribe(()=>{
  console.log('优化后订阅数据的变化', storeHoc.getState());
})
storeHoc.dispatch(changeNameAction('优化name1'))
storeHoc.dispatch(changeNameAction('优化name2'))
storeHoc.dispatch(changeCounterAction(150))
