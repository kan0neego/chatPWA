const messages = (state = [], action) => {
   switch (action.type) {
      case 'ADD_MESSAGE': 
         return state.concat([
            {
               message: action.message,
               author: action.author
            }
         ]);
      default:
         return state;
   }
}

export default messages;
