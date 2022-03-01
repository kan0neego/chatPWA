// TODO: Переписать все компоненты используя библиотеку styled-component

import { useState, useEffect, useRef } from "react";
import Icon from "./Icon.js";
import "../styles/MenuDrop.css";

/**
 * This function create a component of button with a dropdown list.
 * @param {string} iconID - Identity SVG name within a sprite file.
 * @param {string} titleButton - If a icon of SVG don't define then use title for button.
 * @param {Object[]} menuList - List categories of menu.
 * @param {string|number} menuListID - Identity menu element.
 * @param {Object<type|string>} buttonStyle - Overlap to style set for button.
 * @param {Object<type|string>} iconStyle - Overlap to style set for SVG.
 */

const MenuDrop = prop => {
  const { iconID, titleButton, menuList, menuListID, buttonStyle, iconStyle } = prop;
  const [ appearanse, setState ] = useState(false);
  const handleClick = () => {
    const menuListNode = document.getElementById(menuListID);
    if (appearanse !== true) {
      menuListNode.classList.remove("menu_menuList--disabled")
      setState(true);
    } else {
      menuListNode.classList.add("menu_menuList--disabled");
      setState(false);
    }
    window.addEventListener('click', mouseClick => {
      const target = mouseClick.target;
      if (!target.closest('.menu') && !target.closest('.menu_button')) {
        menuListNode.classList.add("menu_menuList--disabled");
        setState(false);
      };
    })
  }

  return (
    <div className="menu">
      <button className="menu_button" style={buttonStyle} type="menu" onClick={handleClick} >
        {
          iconID && 
            <Icon id={iconID} style={iconStyle} />
        }
        {titleButton}
      </button>
      <MenuList list={menuList} id={menuListID} />
    </div>
  );
}

const MenuList = prop => {
  const { list, id } = prop;
  const targetRef = useRef();
  const listItem = list.map((element, index) => {
    return (
    <li key={index} id={`dropdown_item-${index}`}>
      <a href={element.index}>{element.title}</a>
    </li>
    )
  })

  useEffect(() => {
    if (targetRef.current) {
      const childNodes = targetRef.current.childNodes;
      let timing = 60;
      for (let child of childNodes) {
        child.style.animation = `scaleZ 300ms ${timing}ms ease-in-out forwards`;
        timing += 60;
      }
    }
  }, [])

  return (
    <ul className="menu_menuList menu_menuList--disabled" id={id} ref={targetRef}>
      {listItem}
    </ul>
  )
};

export default MenuDrop;