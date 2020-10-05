/** @format */

const { createSelector } = require('reselect');

const selectMessages = state => state.messages;

const selectCurrentMessages = createSelector([selectMessages], messages => messages.currentMessages);

export { selectCurrentMessages };
