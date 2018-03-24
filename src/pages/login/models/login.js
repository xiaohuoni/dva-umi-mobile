
import * as loginService from '../services/login'
export default {
    namespace: 'login',
    state: {
        text: 'page work',
        list: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/login') {
                    dispatch({
                        type: 'fetch'
                    })
                    dispatch({
                        type:'global/setTitle',payload:{
                          text:"登录"
                        }
                      })
                }
            });
        }
    },
    effects: {
        *fetch({ payload }, { call, put }) {
            yield put({
                type: 'save', payload: {
                        text: 'page init'
                    }
            });
        },
        *delete({ payload }, { call, put }) {
            yield put({
                type: 'save', payload: {
                        list: []
                }
            });
        },
        *update({ payload }, { call, put, select }) {
            const data = yield call(loginService.query, payload);
            if (data) {
                yield put({
                    type: 'save',
                    payload: {
                        list: data.data
                    },
                })
            }
        }
    },
    reducers: {
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};        
