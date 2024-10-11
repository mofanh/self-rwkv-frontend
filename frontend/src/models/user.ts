export default {
  state: {
    user: {
        name: 'user',
    },
  },

  effects: {
    *queryUser({ payload }, { call, put }) {
    //   const { data } = yield call(queryUser, payload);
    console.log('queryUser--', payload);
      yield put({ type: 'queryUserSuccess', payload: data });
    },
  },

  reducers: {
    queryUserSuccess(state, { payload }) {
        console.log('queryUserSuccess--', payload);
      return {
        ...state,
        user: payload,
      };
    },
  },

  test(state) {
    console.log('test');
    return state;
  },
};