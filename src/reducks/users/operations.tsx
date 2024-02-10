import { Dispatch } from 'redux';
import axios from 'axios';
import { ThunkAction,ThunkDispatch } from 'redux-thunk';
import { RootState } from '../store/store';
import {
  signInAction,
  // signOutAction,
  // editProfileStateAction,
} from './actions';
import { isValidEmailFormat, isValidRequiredInput } from '../../function/common';
import { useNavigate } from 'react-router-dom';

const usersRef = axios.create({
  baseURL: 'http://localhost:8081/api/login',
});

// ユーザープロフィールを編集する処理
// export const editUserProfile = (
//   iconPath: string,
//   introduction: string,
//   uid: string,
//   username: string
// ): ThunkAction<void, RootState, undefined, any> => {
//   return async (dispatch: Dispatch) => {
//     const updateValue = {
//       icon_path: iconPath,
//       username: username,
//     };
//     try {
//       await usersRef.put(`/users/${uid}`, updateValue);
//       alert('ユーザー情報を更新しました。');
//       dispatch(editProfileStateAction(updateValue));
//       // useNavigateの使用方法を変更
//       // const navigate = useNavigate();
//       // navigate(-1); // goBackと同等
//     } catch (error) {
//       console.error(error);
//       alert('ユーザー情報の更新に失敗しました。');
//     }
//   };
// };

// 認証状態の監視
// export const listenAuthState = (): ThunkAction<void, RootState, undefined, any> => {
//   return async (dispatch: Dispatch) => {
//     try {
//       const response = await usersRef.get('/auth');
//       const user = response.data;
//       if (user) {
//         dispatch(
//           signInAction({
//             email: user.email,
//             isSignedIn: true,
//             role: user.role,
//             uid: user.uid,
//             username: user.username,
//           })
//         );
//       } else {
//         // const navigate = useNavigate();
//         // navigate('/signin');
//         alert('サインインしていません。'); // useNavigateはコンポーネント内でのみ使用可能
//       }
//     } catch (error) {
//       console.error(error);
//       // const navigate = useNavigate();
//       // navigate('/signin');
//       alert('サインインしていません。'); // useNavigateはコンポーネント内でのみ使用可能
//     }
//   };
// };

// 新規ユーザー登録処理
export const signUp = (
  name: string,
  email: string,
  password: string,
  confirmPassword: string
): ThunkAction<Promise<boolean>, RootState, undefined, any> => {
  return async (dispatch: ThunkDispatch<RootState, undefined, any>): Promise<boolean> => {
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
): ThunkAction<void, RootState, undefined, any> => {
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

// // 住所情報を保存する処理
// export const saveAddress = (
//   address: any
// ): ThunkAction<void, RootState, undefined, any> => {
//   return async (dispatch: Dispatch, getState: () => RootState) => {
//     const userId = getState().users.uid;
//     try {
//       await usersRef.post(`/users/${userId}/addresses`, address);
//       alert('入力いただいた情報を保存しました。');
//       const navigate = useNavigate();
//       navigate('/bank');
//     } catch (error) {
//       console.error(error);
//       alert('情報の保存に失敗しました。通信環境を確認してもう1度お試しください。');
//       throw new Error(error as string);
//     }
//   };
// };

// export const signIn = async (email: string, password: string): Promise<boolean> => {
//   // dispatch(showLoadingAction('Sign in...'));

//   // バリデーション
//   if (!isValidRequiredInput(email, password)) {
//     // dispatch(hideLoadingAction());
//     alert('メールアドレスかパスワードが未入力です。');
//     return false;
//   }

//   if (!isValidEmailFormat(email)) {
//     // dispatch(hideLoadingAction());
//     alert('メールアドレスの形式が不正です。');
//     return false;
//   }

//   try {
//     // Spring側のサインインAPIエンドポイントにリクエスト
//     const response = await usersRef.post('/signin', {
//       email,
//       password,
//     });

//     const user = response.data;
//     if (user) {
//       // dispatch(signInAction(user));
//       // dispatch(hideLoadingAction());
//       const navigate = useNavigate();
//       navigate('/');
//     }

//     return true;
//   } catch (error) {
//     // dispatch(hideLoadingAction());
//     alert('サインインに失敗しました。もう一度お試しください。');
//     return false;
//   }
// };

// // サインアウト処理
// export const signOut = (): ThunkAction<void, RootState, undefined, any> => {
//   return async (dispatch: Dispatch, getState: () => RootState) => {
//     // dispatch(showLoadingAction('Sign out...'));
//     const uid = getState().users.uid;

//     try {
//       await usersRef.post(`/users/${uid}/signout`);

//       // カートから商品を削除
//       await usersRef.delete(`/users/${uid}/cart`);

//       dispatch(signOutAction());
//       const navigate = useNavigate();
//       navigate('/signin');
//     } catch (error) {
//       // dispatch(hideLoadingAction());
//       throw new Error('サインアウトに失敗しました。');
//     }
//   };
// };
