import React from 'react';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/ContactsOperations';
import { selectContacts, selectFilter } from '../../redux/Selectors';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ContactsContainer>
      <ContactsList>
        {getVisibleContacts().length > 0 ? (
          getVisibleContacts().map(({ id, name, phone }) => (
            <ContactsItem key={id}>
              <span>{name}:</span>
              <span>{phone}</span>
              <Button onClick={() => dispatch(deleteContact(id))}>
                Delete
              </Button>
            </ContactsItem>
          ))
        ) : (
          <Notification />
        )}
      </ContactsList>
    </ContactsContainer>
  );
};

export default Contacts;
