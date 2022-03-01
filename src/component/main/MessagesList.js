import React from "react";
import AddMessage from "../AddMessage";
import MessageList from "../MessageList";
import { ContainerMessagesList, ContainerMessages, ContainerMessageInput } from "../styled";

const MessagesList = () => {
  return (
    <ContainerMessagesList>
      <ContainerMessages>
        <MessageList />
      </ContainerMessages>
      <ContainerMessageInput>
        <AddMessage />
      </ContainerMessageInput>
    </ContainerMessagesList>
  )
}

export default MessagesList;
