import React from "react";
import Header from "./Header";
import MessagesList from "./MessagesList";
import { ContainerMain } from "../styled";

const Main = () => {
  return (
    <ContainerMain>
      <Header />
      <MessagesList />
    </ContainerMain>
  )
}

export default Main;
