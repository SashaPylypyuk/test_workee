import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Color from 'color';
import InfiniteScroll from 'react-infinite-scroll-component';
import User from './User';

const ListOfUsers = ({ data, initialUsers }) => {
  const [hasMore, setHasMore] = useState(true);
  const [users, setUsers] = useState(initialUsers);

  const fetchMoreData = () => {
    if (data.length < 1) {
      setHasMore(false);
    } else {
      setUsers([...users, ...data.splice(0, 50)]);
    }
  };

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {users.map((user, index) => (
        <User user={user} index={index} />
      ))}
    </InfiniteScroll>

  );
};

ListOfUsers.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      color: Color,
      name: PropTypes.string,
      speed: PropTypes.number,
      time: PropTypes.number,
    }),
  ).isRequired,
  initialUsers: PropTypes.arrayOf(
    PropTypes.shape({
      color: Color,
      name: PropTypes.string,
      speed: PropTypes.number,
      time: PropTypes.number,
    }),
  ).isRequired,
};

export default ListOfUsers;
