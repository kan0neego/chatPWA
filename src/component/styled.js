import styled from 'styled-components';
import { images, svg } from '../assets/images/imageAll';

const Paragraph = styled.p`
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  color: #B5B5B5;
`

const Title = styled.h1`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 1.428em;
  line-height: 1.714em;
  color: #FFFFFF;
`;

const ContainerChatApp = styled.div`
  display: grid;
  grid-template-columns: 261.5px minmax(567px, 1fr) 201px;
  background: url(${images["background.webp"]}) no-repeat center;
  background-size: cover;
`

const ContainerNavigation = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.142em;
  height: 100vh;
  overflow-y: auto;
  padding-top: 2.5em;
  padding-right: 1.785em;
  padding-left: 1.785em;
  background: rgba(37, 39, 42, 0.75);

  &::-webkit-scrollbar {
    width: 9px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border: 2px solid transparent;
    border-radius: 100px;
    background-clip: content-box;
  }
`

const ContainerSetting = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ContainerTreads = styled.div`
  display: flex;
  align-items: center;
`

//TODO: Добавить стили для контейнера каналов;
const ContainerChannels = styled.div`

`

const ContainerChannelsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.857em;
  text-transform: uppercase;
`

const ContainerChannelsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  padding-left: 0;
`

const Channel = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 1em;
  color: #B5B5B5;
  text-decoration: none;
  height: 2.142em;
  border-radius: 5px;
  padding-left: 0.928em;

  &:hover {
    background-color: rgba(181, 181, 181, 0.2);
    color: #FFFFFF;
  }
`

// TODO: Добавить стили для контейнера друзей;
const ContainerFriends = styled.div`

`

const FriendsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.857em;
  text-transform: uppercase;
`

const FriendsList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.785em;
  padding-top: 1em;
  padding-left: 0;
  padding-bottom: 1.071em;
`

const ContainerMain = styled.section`
  background: #fff;
`

const ContainerHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 81px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding-left: 1.785em;
  padding-right: 1.785em;
`

const HeaderPanel = styled.div`
  display: flex;
  align-items: center;
`

const HeaderInput = styled.input`
  width: 251px;
  height: 33px;
  margin-left: 25px;
  padding-right: 8.5px;
  padding-left: 8.5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: url("${svg["search.svg"]}") no-repeat center;
  background-position-x: 94%;

  &:focus {
    background: none;
  }
`

const ContainerMessagesList = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContainerMessages = styled.div`
  width: 100%;
  height: 100%;
`

const ContainerMessageInput = styled.div`
  width: 100%;
  height: 60px;
  border: 1px, solid, #000000;
`

const ContainerProfile = styled.section`
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
`

const ContainerProfileInformation = styled.div`
  padding-top: 14px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 28px;
`

const ContainerProfileSocialIcon = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  gap: 6.5px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const LinkShape = styled.a`
  position: relative;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: #E8E8EB;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

const ContainerProfileMenu = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 2.5px;
`

const Button = styled.button`
  width: 133.5px;
  height: 25px;
  font-size: 0.928em;
  color: #FFFFFF;
  text-align: center;
  border: 0;
  border-radius: 4px;
  background-color: #3577EF;
  cursor: pointer;
`

const ContainerProfileContact = styled.div`
  padding-top: 14px;
`

export { 
  Title, 
  Button,
  Channel,
  Paragraph,
  LinkShape,
  FriendsInfo,
  FriendsList,
  HeaderPanel,
  HeaderInput,
  ContainerMain,
  ContainerHeader,
  ContainerTreads, 
  ContainerProfile,
  ContainerSetting, 
  ContainerFriends,
  ContainerChatApp,
  ContainerChannels,
  ContainerMessages,
  ContainerNavigation, 
  ContainerProfileMenu,
  ContainerMessageInput,
  ContainerMessagesList,
  ContainerChannelsInfo,
  ContainerChannelsList,
  ContainerProfileContact,
  ContainerProfileSocialIcon,
  ContainerProfileInformation,
};
