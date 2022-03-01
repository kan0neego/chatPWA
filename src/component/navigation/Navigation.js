import React from 'react';
import Treads from './Treads';
import Friends from './Friends';
import Setting from './Setting';
import Channels from './Channels';
import { ContainerNavigation } from '../styled';

const Navigation = () => {
  return (
    <ContainerNavigation>
      <Setting />
      <Treads />
      <Channels />
      <Friends />
    </ContainerNavigation>
  )
}

export default Navigation;
