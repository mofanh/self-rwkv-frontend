import { queryChatBot } from "@/pages/AI/Chat/utils";
import { xfSparkRequest } from "@/services/ai/http/xfSparkrController";
import { useRequest } from "@umijs/max";

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
  status: 'pass' | 'loading' | 'error' | string;
}


// 同步更新 state 的 reducers，处理异步逻辑的 effects，订阅数据源的 subscriptions
const chatStore: ChatStoreAbstract = {
  state: {
    chats: [],
    selectChatId: '01',
  },

  effects: {
    *queryNextChat({ payload }, { call, put }) {
      // const res = useRequest(queryChatBot)
      // console.log('res--', res)
      const data = yield call(queryChatBot);
      console.log('data--', data)
      // yield put({ type: 'queryUserSuccess', payload: data });
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