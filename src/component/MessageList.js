import Message from './Message.js';

const MessageList = ({ messages }) => {
   return (
      <ul>
         {messages.map(message => (
            <Message
               key={message.id}
               {...message}
            />
         ))}
      </ul>
   )
}

export default MessageList;