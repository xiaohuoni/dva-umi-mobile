
import * as mainService from '../services/main'
export default {
    namespace: 'main',
    state: {
        text: 'page work',
        list: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                if (pathname === '/main'||pathname === '/') {
                    dispatch({
                        type: 'fetch'
                    })
                    dispatch({
                        type:'global/setTitle',payload:{
                          text:"首页"
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
            const data = yield call(mainService.query, payload);
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
