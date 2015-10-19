/**
 * 中间件
 * @param  {[type]} store [description]
 * @return {[type]}       [description]
 */
export const middlewarer = store => next => action => {
  //一系列操作
  let result = next(action);

  return result;
}


/**
 * 示例
 */
// export const logger = store => next => action => {
//   console.log('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   return result;
// };

// export const crashReporter = store => next => action => {
//   try {
//     return next(action);
//   } catch (err) {
//     console.error('Caught an exception!', err);
//     Raven.captureException(err, {
//       extra: {
//         action,
//         state: store.getState()
//       }
//     });
//     throw err;
//   }
// }