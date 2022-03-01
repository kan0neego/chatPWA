import '../styles/userCard.css';
import Icon from './Icon.js';
import { images } from '../assets/images/imageAll';
import { useLayoutEffect, useState, useRef } from 'react';

/**
 * This function create a component of user's card
 * 
 * @param {string} userName - User's name being gotten from date base.
 * @param {string} userAvatar - User's avatar being gotten from date base.
 * @param {boolean} status - User's network status being gotten from date base.
 * @param {string} iconID - Identity SVG name within a sprite file.
 */
const UserCard = prop => {
  const { 
          userName = 'Anonymous', 
          userAvatar = 'userAvatar', 
          status = false, 
          iconID = 'shape' 
  } = prop;
  const [ state, setState ] = useState(status);
  const targetRef = useRef();

  useLayoutEffect(() => {
    const node = targetRef.current;
    if (state) {
      node.classList.add('online');
    } else {
      node.classList.add('offline');
      setState(false);
    }
  }, [state]);
    
  return (
    <div className="navigation_friend_list_card">
      <div className="navigation_friend_list_card_indicate" ref={targetRef} >
        <Icon id={iconID} />
      </div>
      <div className="navigation_friend_list_card_avatar">
        <img src={images[`${userAvatar}.svg`]} height="34" width="34" alt="" />
        <div className="border"></div>
      </div>
      <div className="navigation_friend_list_card_name">
          <p>{userName}</p>
      </div>
  </div>
  )
}

export default UserCard;
