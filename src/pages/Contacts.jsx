import React from 'react';
import { Form, Title, Contact, Filter } from '../components';

export const Contacts = () => {
  return (
    <>
      <Title title="PhoneBook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <Contact />
    </>
  );
};

