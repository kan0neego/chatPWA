import "../styles/Icon.css";
import Sprite from '../assets/svg/sprite.symbol.svg';

function Icon(prop) {
  const { id, style } = prop;

  return (
    <svg className={`svg-${id}-dims`} style={style}>
      <use href={`${Sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
