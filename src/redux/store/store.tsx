import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { History } from 'history';
import { UsersReducer } from '../users/reducers';

export default function createStore(history: History) {
    const rootReducer = combineReducers({
        users: UsersReducer,
    });

    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(process.env.NODE_ENV === 'development' ? [createLogger({ collapsed: true, diff: true })] : []),
    });
}
