import axios from 'axios';
import * as actions from '../actions';

var to = actions.to;
var api = actions.api();

export function login (id, pw) {
  console.log(api);
  console.log(id + ' ' + pw);
  return async function (dispatch) {
    actions.connecting(dispatch);

    let err, res;
    [err, res] = await to(axios.get(api + '/user/login',{ headers: { id: 'abc', pw: '123' }}));
    if(err){ actions.connectionError(dispatch); return; }

    if(res.data.result === 'succeed'){
      console.log(res.data);
      dispatch({type: 'setUser', payload: res.data.user});
      dispatch({type: 'setStatus', payload: 'ready'});
      dispatch({type: 'hideModal'});
    }else{
      dispatch({type: 'message', payload: ['Login failed! Invalid id or password!', '登入失敗! 名稱或密碼不正確!', '登入失败! 名称或密码不正确!']});
    }

  }
}

export function logout() {
  return function (dispatch) {
    //dispatch({type: 'setStatus', payload: 'waitForLogin'});
    window.location.reload();
  }
}
