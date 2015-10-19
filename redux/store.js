import { createStore, applyMiddleware } from 'redux';
import { reducer } from 'reducer.js';
import { middlewarer } from 'middleware.js';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger'; //一个很便捷的 middleware，用来打印 action 日志

let = createStoreWithMiddleware = applyMiddleware(
  middleware,
  thunkMiddleware, // 允许我们 dispatch() 函数
  createLogger()
)(createStore);

export default store = createStoreWithMiddleware(reducer);

/**
 * 示例
 */

// import { combineReducers, createStore, applyMiddleware } from 'redux';
// import reducer from 'reducer.js'

// let createStoreWithMiddleware = applyMiddleware(
//   logger,
//   crashReporter
// )(createStore);


// export default store = createStoreWithMiddleware(reducer);
