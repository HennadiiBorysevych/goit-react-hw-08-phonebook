import React from 'react';
import { HomeContainer } from './Home.styled';
import { FaAddressBook, FaHandsHelping, FaSmileWink } from 'react-icons/fa';
export const Home = () => {
  return (
    <HomeContainer>
      <p>
        {' '}
        Hi there... <FaHandsHelping />
      </p>
      <p>
        Welcome to PhoneBook!
        <FaAddressBook />
      </p>
      <p>
        Say goodbye to the hassle of managing your contacts. With PhoneBook, you
        can easily keep track of all your friends, family, and colleagues in one
        place. Your data is always encrypted and protected. Whether you're a
        busy bee or a social butterfly, PhoneBook has got you covered.
      </p>
      <p>
        Sign up now and start organizing your contacts like a pro! <FaSmileWink />
      </p>
    </HomeContainer>
  );
};
