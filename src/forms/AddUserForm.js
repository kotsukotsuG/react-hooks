import React, { useState } from 'react';
//import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }}
    >
      <TextField
        label="Name"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <TextField
        label="Username"
        name="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add new user</button>
    </form>
  );
};

export default AddUserForm;
