import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MenuDrop from './component/MenuDrop.js';

  const list = [
    { link: "https://vk.com", title: "Lorem ipsum dolor sit ame" },
    { link: "https://vk.com", title: "Lorem ipsu" },
    { link: "/", title: "Lorem " },
  ]

ReactDOM.render(
  <React.StrictMode>
    <div className='navigation_setting'>
      <h1>Channel's List</h1>
      <MenuDrop 
        iconID="setting"
        menuList={list}
        menuListID = "menuSettingList"
      />
    </div>
  </React.StrictMode>,
  document.getElementById('navigationBlock')
);
