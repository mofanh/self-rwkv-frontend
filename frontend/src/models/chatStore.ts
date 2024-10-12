interface ChatStoreAbstract {
  state: ChatState,
  effects: {},
  reducers: {},
  tests: {},
}

export interface ChatState {
  chats: ChatsInfo[],
  selectChatId: string,
}
interface ChatsInfo {
  senderRole: 'system' | 'assistent' | 'user',
  context: string,
  time: number,
}

// 同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions
const chatStore: ChatStoreAbstract = {
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
    init(state, { payload }: { payload: string }) {
      if(state.chats.length > 0){
        return {...state};
      }
      state.chats.push({
        senderRole: 'system',
        content: payload,
        time: Date.now(),
      })
      return {...state};
    },
    addCtx(state, { payload }) {
      console.log('addCtx--', state, payload);
      state.chats.push({
        senderRole: payload.senderRole,
        content: payload.content,
        time: Date.now(),
      })
      return {...state};
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
  tests(state) {
    console.log('test');
    return state;
  },
};
  
export default chatStore;