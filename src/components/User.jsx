import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import Color from 'color';
import thumbnail from '../images/thumbnail.jpg';

const stringToTime = (time) => {
  const string = time.toString();
  return `${string[0]}${string[1]}:${string[2]}${string[3]}.${string[4]}${string[5]}${string[6]}`;
};

const cutName = (name) => {
  if (name.length > 21) {
    return (
      <>
        {name.substr(0, 20)}
        &hellip;
      </>
    );
  }
  return name;
};

const User = ({ user, index }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="user" onClick={handleClick}>
      <p className="user__position">
        {index + 1}
      </p>
      <div className="user__row">
        <img
          className={cn('user__thumbnail', {'user__active' : clicked})}
          alt="thumbnail"
          src={thumbnail}
        />
        <div>
          <p className="user__name">
            {cutName(user.name)}
          </p>
          <div className="user__row--small">
            <p className="user__time">
              {stringToTime(user.time)}
            </p>
            <p className="user__speed">
              {user.speed}
              {' '}
              км/ч
            </p>
          </div>
          <p className="user__time--penalty">
            штрафное время
            {' '}
            00:00.00
          </p>
        </div>
      </div>
    </div>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    color: Color,
    name: PropTypes.string,
    speed: PropTypes.number,
    time: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default User;
