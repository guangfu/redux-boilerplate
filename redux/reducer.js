/**
 * 状态处理器创建者
 * @param  {sting} actionType   action类别
 * @param  {} initialState 初始状态
 * @return {function}              状态处理器
 */
export function createStateHandler(...args /*,initialState*/ ) {
  let initialState = args.pop();

  return (callback) => {
    return (state = initialState, action) => {
      console.log('state=%s,action=%s', JSON.stringify(state), JSON.stringify(action));
      if (args.indexOf(action.type) === -1) return state;
      
      return callback.call(null, state, action.data)
    }
  }
}