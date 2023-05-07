import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationStyled,
  NavigationList,
  HeaderNav,
  NavigationItem,
  NavigationLink,
  ContactsLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <NavigationStyled>
        <HeaderNav>
          <NavigationList>
            <NavigationItem>
              <ContactsLink to="/contacts">Contacts</ContactsLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/login">Login</NavigationLink>
            </NavigationItem>
            <NavigationItem>
              <NavigationLink to="/register">Register</NavigationLink>
            </NavigationItem>
          </NavigationList>
        </HeaderNav>
      </NavigationStyled>
      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
