
export default {
  namespace: 'users',
  state: {
    list: [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '高雄市XXX區',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '台南市XXX區',
      },
    ],
    total: null,
    page: null,
    text:'Hellow'
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // *fetch({ payload: { page = 1 } }, { call, put }) {
    //   const { data, headers } = yield call(usersService.fetch, { page });
    //   yield put({
    //     type: 'save',
    //     payload: {
    //       data,
    //       total: parseInt(headers['x-total-count'], 10),
    //       page: parseInt(page, 10),
    //     },
    //   });
    // },
    // *remove({ payload: id }, { call, put, select }) {
    //   yield call(usersService.remove, id);
    //   const page = yield select(state => state.users.page);
    //   yield put({ type: 'fetch', payload: { page } });
    // },
    // *patch({ payload: { id, values } }, { call, put, select }) {
    //   yield call(usersService.patch, id, values);
    //   const page = yield select(state => state.users.page);
    //   yield put({ type: 'fetch', payload: { page } });
    // },
    // *create({ payload: values }, { call, put, select }) {
    //   yield call(usersService.create, values);
    //   const page = yield select(state => state.users.page);
    //   yield put({ type: 'fetch', payload: { page } });
    // },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};