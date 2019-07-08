import { routerRedux } from 'dva/router';

export default {
  namespace: 'global',
  state: {
    text: 'hello umi+dva',
    login: false,
  },
  reducers: {
    setText(state: any) {
      return {
        ...state,
        text: 'setted',
      };
    },
    signin(state: any) {
      return {
        ...state,
        login: true,
      };
    },
  },
  effects: {
    // *login(action, { call, put }) {
    //   yield put({
    //     type: 'signin',
    //   });
    //   yield put(routerRedux.push('/admin'));
    // },
    // *throwError() {
    //   throw new Error('hi error');
    // },
  },
};