import React from 'react';
import { 
  Paragraph,
  Channel,
  ContainerChannels,
  ContainerChannelsInfo,
  ContainerChannelsList,
} from '../styled';

const Channels = () => {
  return (
  <ContainerChannels>
    <ContainerChannelsInfo>
      <Paragraph>Channels</Paragraph>
      <Paragraph>11</Paragraph>
    </ContainerChannelsInfo>
    <ContainerChannelsList>
      <Channel as="a" href='/'># general</Channel>
      <Channel as="a" href='/'># support</Channel>
      <Channel as="a" href='/'># marketing</Channel>
      <Channel as="a" href='/'># thailand</Channel>
      <Channel as="a" href='/'># bali</Channel>
      <Channel as="a" href='/'># poland</Channel>
      <Channel as="a" href='/'># australia</Channel>
      <Channel as="a" href='/'># jobs</Channel>
      <Channel as="a" href='/'># startups</Channel>
    </ContainerChannelsList>
  </ContainerChannels>
  )
}

export default Channels;
