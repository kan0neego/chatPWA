import "./Icon.css";
import Sprite from './assets/sprite.symbol.svg';

function Icon(prop) {
  const { id } = prop;

  return (
    <svg className={`svg-${id}-dims`}>
      <use href={`${Sprite}#${id}`}></use>
    </svg>
  );
};

export default Icon;
