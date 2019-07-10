import router from 'umi/router';
import Cookies from 'js-cookie';

export default {
  namespace: 'global',
  state: {
    siderOpen: true,
    checkState: true,
    authState: Cookies.get('authState') === 'true' ? Cookies.get('authState') : 'false'

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
    *checkReset({ payload }, { call, put, select }) {
      yield put({ type: 'save', payload: { checkState: false } });
      yield put({ type: 'check' });
    },
    *check({ payload }, { call, put, select }) {
      const { checkState, authState } = yield select(state => state.global);
      console.log(checkState)
      if (checkState === false && authState === 'false') {
        throw new Error("get out");
      }
      yield put({ type: 'save', payload: { checkState: true } });
    },
    *login({ payload }, { call, put, select }) {
      Cookies.set('authState', 'true')
      router.push('/')
      yield put({ type: 'save', payload: { authState: 'true' } });
    },
    *logout({ payload }, { call, put, select }) {
      Cookies.set('authState', 'false')
      router.push('/login')
      yield put({ type: 'save', payload: { authState: 'false' } });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname !== '/login') {
          dispatch({ type: 'checkReset' });
        }
      });
    },
  },
};