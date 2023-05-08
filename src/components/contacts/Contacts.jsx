import React from 'react';
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from '../../redux/Contacts/ContactsOperations';
// import { selectContacts, selectFilter } from '../../redux/Selectors';
import { useSelector, useDispatch } from 'react-redux';
import Notification from './notafication/Notafication';
import {
  ContactsContainer,
  ContactsList,
  ContactsItem,
  Button,
} from './Contacts.styled';

const Contact = () => {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.items);
  // const filter = useSelector(state => state.contacts.filter);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  // return (
  //   <ContactsContainer>
  //     <ContactsList>
  //       {getVisibleContacts().length > 0 ? (
  //         getVisibleContacts().map(({ id, name, phone }) => (
  //           <ContactsItem key={id}>
  //             <span>{name}:</span>
  //             <span>{phone}</span>
  //             <Button onClick={() => dispatch(deleteContact(id))}>
  //               Delete
  //             </Button>
  //           </ContactsItem>
  //         ))
  //       ) : (
  //         <Notification />
  //       )}
  //     </ContactsList>
  //   </ContactsContainer>
  // );
};
export default Contact;
