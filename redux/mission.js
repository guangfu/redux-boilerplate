//示例

import { combineReducers, createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

const RECEIVE_INTEGRATION = 'receive_integration';

global.window = global;

/**
 * action：领取积分
 * @param  {object} data { id, integration }
 * @return {object}      object
 */
export function receive(data) {
  return {
    type: RECEIVE_INTEGRATION,
    data: data
  }
}

/**
 * 创建状态处理器reducer
 * @param  {string} actionType 触发状态
 * @return {function}            处理函数
 */

function createStateHandler(...args /*,initialState*/ ) {
  let initialState = args.pop();

  return (callback) => {
    return (state = initialState, action) => {
      console.log('state=%s,action=%s', JSON.stringify(state), JSON.stringify(action));
      if (args.indexOf(action.type) === -1) return state;

      return callback.call(null, state, action.data)
    }
  }
}

let totalIntegration = createStateHandler(RECEIVE_INTEGRATION, 0)((state, data) => {
  return state + data.integration;
});


let dailyMission = createStateHandler(RECEIVE_INTEGRATION, {})((state, data) => {
  if (!state[data.id]) return state;

  if (state[data.id].canReceiveCount <= 0) return state;

  let stateShadow = Object.assign({}, state),
      selected = stateShadow[data.id];

  selected.canReceiveCount--;
  (selected.canReceiveCount === 0) && (selected.status = 'completed');

  return stateShadow;

})

let forwardMission = dailyMission;

let reducer = combineReducers({
  totalIntegration,
  dailyMission
});

console.log('reducer', typeof reducer)

const createStoreWithMiddleware = applyMiddleware(
  createLogger()
)(createStore);


export default function createStoreWithInitialState(initialState) {
  console.log('initialState=%s', JSON.stringify(initialState));
  return createStoreWithMiddleware(reducer, initialState)
}
