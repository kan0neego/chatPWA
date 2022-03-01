const Message = ({ author, message }) => {
   return (
      <p>
         <i>{author}</i>: {message}
      </p>
   )
}

export default Message;
