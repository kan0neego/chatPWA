import React from "react";
import styled from "styled-components";
import Icon from "../Icon";
import MenuDrop from "../MenuDrop";
import ProfileImage from "./ProfileImage";
import {
  Button,
  Paragraph,
  LinkShape,
  ContainerProfile, 
  ContainerProfileMenu,
  ContainerProfileContact,
  ContainerProfileInformation, 
  ContainerProfileSocialIcon, 
 } from "../styled";

const ProfileInformationParagraph = styled(Paragraph)`
  color: #5F6164;
`

const ProfileContactParagraph = styled(Paragraph)`
  color: #5F6164;
  &:nth-child(even) {
    font-size: 17px;
    padding-bottom: 11px;
    color: #000000;
  }
`

const list = [
  { link: 'https://vk.com', title: 'Lorem ipsum dolor sit ame' },
  { link: 'https://vk.com', title: 'Lorem ipsu' },
  { link: '/', title: 'Lorem ' },
]

const Profile = () => {
  return (
    <ContainerProfile>
      <ProfileImage user="photoWomen" />
      <ContainerProfileInformation>
        <h2>Amilia Luna</h2>
        <ProfileInformationParagraph>UI Designer</ProfileInformationParagraph>
        <ContainerProfileSocialIcon>
          <LinkShape as="a" href="/">
            <Icon id='facebook' />
          </LinkShape>
          <LinkShape as="a" href="/">
            <Icon id='twitter' />
          </LinkShape>
          <LinkShape as="a" href="/">
            <Icon id='instagramm' />
          </LinkShape>
          <LinkShape as="a" href="/">
            <Icon id='in' />
          </LinkShape>
        </ContainerProfileSocialIcon>
        <ContainerProfileMenu>
          <Button>Message</Button>
          <MenuDrop
            iconID='iconArrowMenu'
            menuList={list}
            menuListID='MenuProfileList'
            buttonStyle={
              {
                width: '25.5px',
                height: '25px',
                borderRadius: '4px',
                backgroundColor: '#3577EF',
              }
            }
          />
        </ContainerProfileMenu>
        <ContainerProfileContact>
            <ProfileContactParagraph>Username</ProfileContactParagraph>
            <ProfileContactParagraph>@amilia_lu</ProfileContactParagraph>
            <ProfileContactParagraph>Email</ProfileContactParagraph>
            <ProfileContactParagraph>a-luna@gmail.com</ProfileContactParagraph>
            <ProfileContactParagraph>Skype</ProfileContactParagraph>
            <ProfileContactParagraph>amiluna</ProfileContactParagraph>
            <ProfileContactParagraph>Timezone</ProfileContactParagraph>
            <ProfileContactParagraph>2:21 PM Local time</ProfileContactParagraph>
        </ContainerProfileContact>
      </ContainerProfileInformation>
    </ContainerProfile>
  )
}

export default Profile;
