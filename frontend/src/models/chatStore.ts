import { useState } from "react";

// 同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions
const chatStore = {
  state: {
    chats: [],
    selectChatId: '01',
  },

  effects: {
    *queryUser({ payload }, { call, put }) {
      const { data } = yield call(queryUser, payload);
      yield put({ type: 'queryUserSuccess', payload: data });
    },
  },

  reducers: {
    addUserCtx(state, { payload }) {
      console.log('addUserCtx--', state, payload);
      state.chats.push(payload.content)
      return {
       ...state,
        // chats: [...state.chats, payload],
      };
    },
    queryChatStore(state, { payload }) {
      return {
        ...state,
        user: payload,
      };
    },
    changeSelectChatId(state, { payload }) {
      return {
       ...state,
        selectChatId: payload,
      };
    }
  },
  test(state) {
    console.log('test');
    return state;
  },
};
  
export default chatStore;