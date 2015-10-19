import store from 'store.js';

/**
 * 监听state的变化
 */
let unsubscribe = store.subscribe(() => {
  store.getState();
})

/**
 * 取消state变化的监听
 */
unsubscribe();

/**
 * 示例
 */
// import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';

// 打印初始状态
// console.log(store.getState());

// 监听 state 更新时，打印日志
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// 发起一系列 action
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// 停止监听 state 更新
// unsubscribe();