import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import UserTable from './tables/UserTable';
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';

const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ];
  const [users, setUsers] = useState(usersData);

  const addUser = (user) => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const [editing, setEditing] = useState(false);
  const initialFormsState = { id: null, name: '', username: '' };
  const [currentUser, setCurrentUser] = useState(initialFormsState);
  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };
  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map((user) => (user.id === id ? updateUser : user)));
  };
  return (
    <Container>
      <h1>CRUD App with Hooks</h1>
      {editing ? (
        <Box color="text.primary">
          <h2>Edit user</h2>
          <EditUserForm
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
          />
        </Box>
      ) : (
        <Box color="text.primary">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser} />
        </Box>
      )}
      <Box color="text.primary">
        <h2>View users</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
      </Box>
    </Container>
  );
};

export default App;
