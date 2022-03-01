import React from "react";
import Main from "./component/main/Main";
import Navigation from "./component/navigation/Navigation.js";
import Profile from "./component/profile/Profile.js";
import { ContainerChatApp } from "./component/styled";

const ChatApp = () => {
  return (
  <ContainerChatApp>
      <Navigation />
      <Main />
      <Profile />
  </ContainerChatApp>
  )
}

export default ChatApp;
