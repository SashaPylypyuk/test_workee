import React from 'react';
import './styles/style.css';

import ListOfUsers from './components/ListOfUsers';

import users from './api/users';

function App() {
  const initialUsers = users.splice(0, 50);
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ListOfUsers data={users} initialUsers={initialUsers} />
  );
}

export default App;
