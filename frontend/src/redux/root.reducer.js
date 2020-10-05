/** @format */

import { combineReducers } from 'redux';

import messagesReducer from './messages/messages.reducer';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const rootReducer = combineReducers({
    messages: messagesReducer,
});

const persistConfig = {
    key: 'snapkit-dev',
    storage: storage,
};

export default persistReducer(persistConfig, rootReducer);
