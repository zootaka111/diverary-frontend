export const EDIT_USER_PROFILE = "EDIT_USER_PROFILE";
export const editProfileStateAction = (userProfile: UserProfile): EditProfileAction => ({
  type: EDIT_USER_PROFILE,
  payload: userProfile,
});

export const SIGN_IN = "SIGN_IN";
export const signInAction = (userState: UserState): SignInAction => ({
  type: SIGN_IN,
  payload: userState,
});

export const SIGN_OUT = "SIGN_OUT";
export const signOutAction = (): SignOutAction => ({
  type: SIGN_OUT,
});

export const UPDATE_USER_STATE = "UPDATE_USER_STATE";
export const updateUserStateAction = (userState: Partial<UserState>): UpdateUserStateAction => ({
  type: UPDATE_USER_STATE,
  payload: userState,
});

// タイプ定義

export interface UserProfile {
  // プロフィールの型定義
}

export interface UserState {
  // ユーザーの状態の型定義
}

interface EditProfileAction {
  type: typeof EDIT_USER_PROFILE;
  payload: UserProfile;
}

interface SignInAction {
  type: typeof SIGN_IN;
  payload: UserState;
}

interface SignOutAction {
  type: typeof SIGN_OUT;
}

interface UpdateUserStateAction {
  type: typeof UPDATE_USER_STATE;
  payload: Partial<UserState>;
}

// アクションの型定義
export type UserActionTypes = EditProfileAction | SignInAction | SignOutAction | UpdateUserStateAction;
