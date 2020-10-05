/** @format */

import { MessagesActionTypes } from './messages.types';

const setCurrentMessages = messages => {
    return {
        type: MessagesActionTypes.SET_CURRENT_MESSAGES,
        payload: messages,
    };
};

export { setCurrentMessages };
