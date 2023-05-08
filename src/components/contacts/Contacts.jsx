import React from 'react';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/Contacts/ContactsOperations';
// import { selectContacts, selectFilter } from '../../redux/Selectors';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './notafication/Notafication';
import {
  Span,
  SpanWrapper,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';

const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const filter = useSelector(state => state.contacts.filter);

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
    <ContactsList>
      {isLoggedIn ? (
        contacts.map(({ id, name, number }) => (
          <ContactsItem key={id}>
            <SpanWrapper>
              <Span>{name}:</Span>
              <Span>{number}</Span>
            </SpanWrapper>
            <Button onClick={e => dispatch(deleteContact(id))}>Delete</Button>
          </ContactsItem>
        ))
      ) : (
        <Notification />
      )}
    </ContactsList>
  );
};
export default Contact;
