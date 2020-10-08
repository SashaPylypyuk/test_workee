import React, { useState, useCallback } from 'react';

import PropTypes from 'prop-types';
import cn from 'classnames';

import thumbnail from '../images/thumbnail.jpg';

const msToTime = (time) => {
  const milliseconds = parseInt((time / 1000) / 100, 10);
  let seconds = Math.floor((time / 1000) % 60);
  let minutes = Math.floor((time / (1000 * 60)) % 60);

  minutes = (minutes < 10) ? `0${minutes}` : minutes;
  seconds = (seconds < 10) ? `0${seconds}` : seconds;

  return `${minutes}:${seconds}.${milliseconds}`;
};

const User = ({ user, index }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = useCallback(() => {
    setClicked(!clicked);
  });

  return (
    <div className="user" onClick={handleClick}>
      <p className="user__position">
        {index + 1}
      </p>
      <div className="user__row">
        <img
          className={cn('user__thumbnail', {'user__active': clicked})}
          alt="thumbnail"
          src={thumbnail}
        />
        <div>
          <p className="user__name">
            {user.name}
          </p>
          <div className="user__row--small">
            <p className="user__time">
              {msToTime(user.time)}
            </p>
            <p className="user__speed">
              {user.speed}
              {' '}
              км/ч
            </p>
          </div>
          <p className="user__time--penalty" style={{ color: clicked ? user.color.hex() : '#bbc0c7' }}>
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
    color: PropTypes.object,
    name: PropTypes.string,
    speed: PropTypes.number,
    time: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default User;
