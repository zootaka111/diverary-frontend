import { configureStore, combineReducers, Middleware, Dispatch, Action } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import thunk, { ThunkAction } from 'redux-thunk';
import { History } from 'history';

// Import reducers
import { UsersReducer } from '../users/reducers';

// createStoreの再定義 - historyを引数で受け、connected-react-routerの利用を抽象化
export default function createStore(history: History) {
    const rootReducer = combineReducers({
        users: UsersReducer,
    });

    const middleWares: Middleware[] = [thunk as Middleware];

    if (process.env.NODE_ENV === 'development') {
        const logger = createLogger({
            collapsed: true,
            diff: true
        });
        middleWares.push(logger as Middleware);
    }

    return configureStore({
        reducer: rootReducer,
        middleware: middleWares,
    });
}





