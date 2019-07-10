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
    login(state) {
      console.log('yee', Cookies.get('logState'))      
      Cookies.set('logState', 'true')
      
      return {
        ...state,
        logState: true
      }
    }
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
        // if (pathname === '/users') {
        //   dispatch({ type: 'fetch', payload: query });
        // }
        dispatch({ type: 'check' });
      });
    },
  },
};