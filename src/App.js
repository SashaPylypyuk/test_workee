import React from 'react';

import ListOfUsers from './components/ListOfUsers';
import data from './api/users';

import './styles/style.css';

function App() {
  const users = [...data];
  const initialUsers = users.splice(0, 50);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ListOfUsers data={users} initialUsers={initialUsers} />
  );
}

export default App;
