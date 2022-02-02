import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/index.js';
import MenuDrop from './component/MenuDrop.js';
import UserCard from './component/userCard.js';
import { AddMessage } from './container/AddMessage.js';
import { MessageList } from './container/MessageList.js';
import Icon from './component/Icon.js';
import images from './assets/images/imageAll.js';
import './index.css';

const store = createStore(reducers);

const listSetting = [
  { link: 'https://vk.com', title: 'Lorem ipsum dolor sit ame' },
  { link: 'https://vk.com', title: 'Lorem ipsu' },
  { link: '/', title: 'Lorem ' },
]

const listMenu = [
  { link: 'https://vk.com', title: 'Lorem ipsum dolor sit ame' },
  { link: 'https://vk.com', title: 'Lorem ipsu' },
  { link: '/', title: 'Lorem ' },
]

const listProfileMenu = [
  { link: 'https://vk.com', title: 'Lorem ipsum dolor sit ame' },
  { link: 'https://vk.com', title: 'Lorem ipsu' },
  { link: '/', title: 'Lorem ' },
]

ReactDOM.render(
  <React.StrictMode>
    <h1>Channel's List</h1>
    <MenuDrop
      iconID='setting'
      menuList={listSetting}
      menuListID='menuSettingList'
    />
  </React.StrictMode>,
  document.querySelector('.navigation_setting')
)

ReactDOM.render(
  <React.StrictMode>
    <Icon id='balloon' />
    <p>All treads</p>
  </React.StrictMode>,
  document.querySelector('.navigation_treads')
)

ReactDOM.render(
  <React.StrictMode>
    <div className='navigation_channels_info'>
      <p>Channels</p>
      <p>11</p>
    </div>
    <ul className='navigation_channels_list'>
      <a href='/'># general</a>
      <a href='/'># support</a>
      <a href='/'># marketing</a>
      <a href='/'># thailand</a>
      <a href='/'># bali</a>
      <a href='/'># poland</a>
      <a href='/'># australia</a>
      <a href='/'># jobs</a>
      <a href='/'># startups</a>
      <a href='/'># italy</a>
      <a href='/'># freelance</a>
    </ul>
  </React.StrictMode>,
  document.querySelector('.navigation_channels')
)

ReactDOM.render(
  <React.StrictMode>
    <div className='navigation_friends_info'>
      <p>Friends</p>
      <p>82</p>
    </div>
    <div className='navigation_friends_list'>
      <UserCard />
      <UserCard userName='Genevieve Longest' status={true} />
      <UserCard status={true} />
    </div>
  </React.StrictMode>,
  document.querySelector('.navigation_friends')
);

ReactDOM.render(
  <React.StrictMode>
    <h2>#general</h2>
    <div className='main_header_panel'>
      <Icon id='iconPeople' />
      <p>1.093</p>
      <input type='search' placeholder='Search...' />
      <Icon id='iconBell' />
      <MenuDrop
        iconID='iconMenu'
        menuList={listMenu}
        menuListID='MenuMainList'
      />
    </div>
  </React.StrictMode>,
  document.querySelector('.main_header')
)

ReactDOM.render(
  <Provider store={store}>
    <MessageList />
  </Provider>,
  document.querySelector('.main_messages-list_message')
)

ReactDOM.render(
  <Provider store={store}>
    <AddMessage />
  </Provider>,
  document.querySelector('.main_messages-list_input')
)

ReactDOM.render(
  <React.StrictMode>
    <img src={images['photoWomen.png']} width='201' height='201' className='photo' alt='' />
    <div className='profile_information'>
      <h2>Amilia Luna</h2>
      <p>UI Designer</p>
      <div className='profile_social-icon'>
        <a className='shape' href='/'>
          <Icon id='facebook' />
        </a>
        <a className='shape' href='/'>
          <Icon id='twitter' />
        </a>
        <a className='shape' href='/'>
          <Icon id='instagramm' />
        </a>
        <a className='shape' href='/'>
          <Icon id='in' />
        </a>
      </div>
      <div className='profile_menu'>
        <button type='button'>Message</button>
        <MenuDrop
          iconID='iconMenu'
          menuList={listProfileMenu}
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
      </div>
      <div className='profile_contact'>
        <p>Usernam</p>
        <p>@amilia_lu</p>
        <p>Email</p>
        <p>a-luna@gmail.com</p>
        <p>Skype</p>
        <p>amiluna</p>
        <p>Timezone</p>
        <p>2:21 PM Local time</p>
      </div>
    </div>

  </React.StrictMode>,
  document.querySelector('.profile')
)