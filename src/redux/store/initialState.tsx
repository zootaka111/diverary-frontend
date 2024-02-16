export interface UserState {
    email: string;
    isSignedIn: boolean;
    role: string;
    uid: string;
    username: string;
}

export interface LoadingState {
    state: boolean;
    text: string;
}

export interface RootState {
    loading: LoadingState;
    users: UserState;
}

export const initialState: RootState = {
    loading: {
        state: false,
        text: ""
    },
    users: {
        email: "",
        isSignedIn: false,
        role: "",
        uid: "",
        username: ""
    }
};
