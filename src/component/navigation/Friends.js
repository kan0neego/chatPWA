import React from "react";
import UserCard from "../UserCard";
import { ContainerFriends, FriendsInfo, FriendsList, Paragraph } from "../styled";

const Friends = () => {
  return (
    <ContainerFriends>
      <FriendsInfo>
        <Paragraph>Friends</Paragraph>
        <Paragraph>82</Paragraph>
      </FriendsInfo>
      <FriendsList>
        <UserCard />
        <UserCard userName='Genevieve Longest' status={true} />
        <UserCard status={true} />
      </FriendsList>
    </ContainerFriends>
  )
}

export default Friends;
