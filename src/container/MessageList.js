import { connect } from 'react-redux';
import MessageListComponent from '../component/MessageList.js';

export const MessageList = connect(state => ({
   messages: state.messages
}))(MessageListComponent);
