import React from 'react';
import MenuDrop from '../MenuDrop';
import { Title, ContainerSetting } from '../styled';

const list = [
  { link: 'https://vk.com', title: 'Lorem ipsum dolor sit ame' },
  { link: 'https://vk.com', title: 'Lorem ipsu' },
  { link: '/', title: 'Lorem ' },
]

const Setting = prop => {
  return (
    <ContainerSetting>
      <Title>Channel's List</Title>
      <MenuDrop
        iconID='setting'
        menuList={ list }
        menuListID='menuSettingList'
      />
    </ContainerSetting>
  )
};

export default Setting;
