import router from 'umi/router';
import { notification } from 'antd';

const openNotification = (type, title, description) => {
  notification[type]({
      message: title,
      description: description,
      onClick: () => {
          console.log('Notification Clicked!');
      },
  });
};

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
    temp:[],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    // listAdd(state, { payload }) {
    //   return {
    //     ...state,
    //     list : [...state.lsit, payload]
    //   }
    // }
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
    *listAdd({ payload }, { call, put, select }) {
      const { list } = yield select(state => state.users);
      console.log(payload)
      yield put({ type: 'save', payload: { list: [...list, payload] } });
      router.push('/users')
      openNotification('success', '新增成功', '')
    },
    *listEdit({ payload }, { call, put, select }) {
      const { list } = yield select(state => state.users);
      console.log(payload)
      list[payload['index']].age = payload['age']
      list[payload['index']].address = payload['address']
      yield put({ type: 'save', payload: { list: list } });
      router.push('/users')
      openNotification('success', '修改成功', '')
    },
    *listRemove({ payload }, { call, put, select }) {
      const { list } = yield select(state => state.users);
      console.log(payload)
      yield put({ type: 'save', payload: { list: [...list, payload] } });
      router.push('/users')
      openNotification('success', '移除成功', '')
    },
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