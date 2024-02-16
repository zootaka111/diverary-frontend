import { Dispatch } from 'redux';
import axios from 'axios';
import { ThunkAction,ThunkDispatch } from 'redux-thunk';
import RootState  from '../store/store';
import {
  signInAction,
} from './actions';
import { isValidEmailFormat, isValidRequiredInput } from '../../function/common';
import { useNavigate } from 'react-router-dom';

const usersRef = axios.create({
  baseURL: 'http://localhost:8081/api/login',
});


// 新規ユーザー登録処理
export const signUp = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): ThunkAction<Promise<boolean>, typeof RootState, undefined, any> => {
  return async (dispatch: ThunkDispatch<typeof RootState, undefined, any>): Promise<boolean> => {
    if (!isValidRequiredInput(name, email, password, confirmPassword)) {
      alert('必須項目が未入力です。');
      return false;
    }

    if (!isValidEmailFormat(email)) {
      alert('メールアドレスの形式が不正です。もう1度お試しください。');
      return false;
    }

    if (password !== confirmPassword) {
      alert('パスワードが一致しません。もう1度お試しください。');
      return false;
    }

    try {
      const response = usersRef.post('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
          email,
          password,
          name
        }),
      })

      const user = (await response).data
      if (user) {
        dispatch(signInAction(user));
        const navigate = useNavigate();
        navigate('/');
      }
    } catch (error) {
      alert('アカウント登録に失敗しました。もう1度お試しください。');
      throw new Error(error as string);
    }
    return true
  };
};

// パスワードリセット処理
export const resetPassword = (
  email: string
): ThunkAction<void, typeof RootState, undefined, any> => {
  return async (dispatch: Dispatch) => {
    if (!isValidEmailFormat(email)) {
      alert('メールアドレスの形式が不正です。');
      return false;
    } else {
      try {
        await usersRef.post('/reset-password', { email });
        alert('入力されたアドレス宛にパスワードリセットのメールをお送りしましたのでご確認ください。');
        const navigate = useNavigate();
        navigate('/signin');
      } catch (error) {
        console.error(error as string);
        alert('登録されていないメールアドレスです。もう一度ご確認ください。');
      }
    }
  };
};
