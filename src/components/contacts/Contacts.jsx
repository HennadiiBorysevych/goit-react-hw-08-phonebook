import React from 'react';
import { useEffect } from 'react';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/Contacts/ContactsOperations';
import { selectContacts, selectFilter,isLogged } from '../../redux/Selectors';
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
  const contacts = useSelector(selectContacts);
  const isLoggedIn = useSelector(isLogged);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter ? filter.toLowerCase() : '';
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <ContactsList>
      {isLoggedIn ? (
        getVisibleContacts().map(({ id, name, number }) => (
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
