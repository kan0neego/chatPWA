import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import MenuDrop from "../MenuDrop";
import { ContainerHeader, HeaderPanel, Paragraph, HeaderInput } from "../styled";

const ParagraphHeader = styled(Paragraph)`
  text-align: center;
`

const list = [
  { link: 'https://vk.com', title: 'Lorem ipsum dolor sit ame' },
  { link: 'https://vk.com', title: 'Lorem ipsu' },
  { link: '/', title: 'Lorem ' },
]

const Header = () => {
  return (
    <ContainerHeader>
      <h2>#general</h2>
      <HeaderPanel>
        <Icon id='iconPeople' />
        <ParagraphHeader>1.093</ParagraphHeader>
        <HeaderInput as="input" type="search" placeholder="Search..." />
        <Icon id='iconBell' />
        <MenuDrop iconID='iconMenu' menuList={list} menuListID='MenuMainList' />
      </HeaderPanel>
    </ContainerHeader>
  )
}

export default Header;
