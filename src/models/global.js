import router from 'umi/router';
import Cookies from 'js-cookie';

export default {
  namespace: 'global',
  state: {
    siderOpen: true,
    logState: Cookies.get('logState') === 'true' ? Cookies.get('logState') : 'false',
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    check(state) {
      if (state.logState === 'true') {
        console.log('ok')
        router.push('/')
      }
      else {
        console.log('no')
        router.push('/login')
      }
      return {
        ...state,
      };
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
    *check({ payload }, { call, put, select }) {
      const { logState } = yield select(state => state.global);
      console.log(payload)
      // if (logState === 'false' && payload === 'other') {
      //   console.log('no')
      //   router.push('/login')
      // }
    },
    *login({ }, { call, put, select }) {
      Cookies.set('logState', 'true')
      router.replace('/')
      yield put({ type: 'save', payload: { logState: 'true' } });
    },
    *logout({ }, { call, put, select }) {
      Cookies.set('logState', 'false')
      router.replace('/login')
      yield put({ type: 'save', payload: { logState: 'false' } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        // if (pathname === '/users') {
        //   dispatch({ type: 'fetch', payload: query });
        // }
        // if (pathname === '/login') {
        //   dispatch({ type: 'check', payload: 'login' });
        // }
        // else {
        //   dispatch({ type: 'check', payload: 'other' });
        // }
      });
    },
  },
};