import React from 'react';
import ReactDOM from 'react-dom';
import MenuDrop from './component/MenuDrop.js';
import UserCard from './component/userCard.js';
import Icon from './component/Icon.js';
import './index.css';

const list = [
  { link: "https://vk.com", title: "Lorem ipsum dolor sit ame" },
  { link: "https://vk.com", title: "Lorem ipsu" },
  { link: "/", title: "Lorem " },
]

/* Я считаю, что где-то в этом месте должен быть запрос к БД
    для извлечения статуса (онлайн/оффлайн) пользователя в данный момент,
    его имя и ссылка на аватар
*/

ReactDOM.render(
  <React.StrictMode>
    <div className='navigation_setting'>
      <h1>Channel's List</h1>
      <MenuDrop 
        iconID='setting'
        menuList={list}
        menuListID = 'menuSettingList'
      />
    </div>
    <div className='navigation_treads'>
      <Icon id='balloon' />
      <p>All treads</p>
    </div>
    <div className="navigation_channels">
      <div className="navigation_channels_info">
        <p>Channels</p>
        <p>11</p>
      </div>
      <ul className="navigation_channels_list">
        <a href="/"># general</a>
        <a href="/"># support</a>
        <a href="/"># marketing</a>
        <a href="/"># thailand</a>
        <a href="/"># bali</a>
        <a href="/"># poland</a>
        <a href="/"># australia</a>
        <a href="/"># jobs</a>
        <a href="/"># startups</a>
        <a href="/"># italy</a>
        <a href="/"># freelance</a>
      </ul>
    </div>
    <div className="navigation_friends">
      <div className="navigation_friends_info">
        <p>Friends</p>
        <p>82</p>
      </div>
      <div className="navigation_friends_list">
        <UserCard />
        <UserCard userName='Genevieve Longest' status={true} />
        <UserCard status={true} />
      </div>
  </div>
  </React.StrictMode>,
  document.getElementById('navigationBlock')
);
