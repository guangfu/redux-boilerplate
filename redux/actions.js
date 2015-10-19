/**
 * 状态表示常量值
 */
export const STATE_TYPE = 'state_type';

/**
 * 产生一个不同action
 * @param  {} data 数据
 * @return {Object}      返回action对象
 */
export function generateSyncState(data) {
  return {
    type: STATE_TYPE,
    data: data
  }
}
/**
 * 产生一个异步action
 */

export function generateAsyncState() {
  //推荐返回promise对象
  return (dispatch, getState) => {

  }
}

//import fetch from 'isomorphic-fetch'; //最新的fetch接口
//每个异步请求至少要分发3个action，开始请求、请求成功、请求失败
// { type: 'FETCH_POSTS' }
// { type: 'FETCH_POSTS', status: 'error', error: 'Oops' }
// { type: 'FETCH_POSTS', status: 'success', response: { ... } }
//fetch需要依赖promise,所以确保promise可用

/**
 * 示例
 */

/*
 * action 类型
 */

// export const ADD_TODO = 'ADD_TODO';
// export const COMPLETE_TODO = 'COMPLETE_TODO';
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

// export const VisibilityFilters = {
//   SHOW_ALL: 'SHOW_ALL',
//   SHOW_COMPLETED: 'SHOW_COMPLETED',
//   SHOW_ACTIVE: 'SHOW_ACTIVE'
// };

/*
 * action 创建函数
 */

// export function addTodo(text) {
//   return { type: ADD_TODO, text };
// }

// export function completeTodo(index) {
//   return { type: COMPLETE_TODO, index };
// }

// export function setVisibilityFilter(filter) {
//   return { type: SET_VISIBILITY_FILTER, filter };
// }

// 来看一下我们写的第一个 thunk action creator！
// 虽然内部操作不同，你可以像其它 action creator 一样使用它：
// store.dispatch(fetchPosts('reactjs'));

// export function fetchPosts(reddit) {

//   // Thunk middleware 知道如何处理函数。
//   // 这里把 dispatch 方法通过参数的形式参给函数，
//   // 以此来让它自己也能 dispatch action。

//   return function (dispatch) {

//     // 首次 dispatch：更新应用的 state 来通知
//     // API 请求发起了。

//     dispatch(requestPosts(reddit));

//     // thunk middleware 调用的函数可以有返回值，
//     // 它会被当作 dispatch 方法的返回值传递。

//     // 这个案例中，我们返回一个等待处理的 promise。
//     // 这并不是 redux middleware 所必须的，但是我们的一个约定。

//     return fetch(`http://www.reddit.com/r/${reddit}.json`)
//       .then(response => response.json())
//       .then(json =>

//         // 可以多次 dispatch！
//         // 这里，使用 API 请求结果来更新应用的 state。

//         dispatch(receivePosts(reddit, json))
//       );

//       // 在实际应用中，还需要
//       // 捕获网络请求的异常。
//   };
// }