import AddMessageComponent from '../component/AddMessage.js';
import addMessage from '../actions/addMessage.js';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
   dispatch: (author, message) => {
      dispatch(addMessage(author, message))
   } 
})

export const AddMessage = connect(null, mapDispatchToProps)(AddMessageComponent);
