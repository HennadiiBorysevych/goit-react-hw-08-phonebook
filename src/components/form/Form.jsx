import { useState } from 'react';
import { addContact } from 'redux/Contacts/ContactsOperations';
import { useDispatch } from 'react-redux';
import { PhoneBookForm, PhoneBookLabel, PhoneBookButton } from './Form.styled';
import { TextField } from '@mui/material';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const onInputChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name,
      number,
    };

    dispatch(addContact(contact));

    e.target.reset();
  };

  return (
    <div>
      <PhoneBookForm onSubmit={handleSubmit}>
        <PhoneBookLabel>
          Name
          <TextField
            onChange={onInputChange}
            required
            type="text"
            name="name"
            label="John Smith"
            variant="filled"
          />
        </PhoneBookLabel>
        <PhoneBookLabel>
          Number
          <TextField
            onChange={onInputChange}

            required
            type="text"
            name="number"
            label="+38(0__)___-__-__"
            variant="filled"
          />
        </PhoneBookLabel>
        <PhoneBookButton type="submit">Add Contact</PhoneBookButton>
      </PhoneBookForm>
    </div>
  );
};

export default Form;