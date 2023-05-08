import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  NavigationStyled,
  NavigationList,
  HeaderNav,
  NavigationItem,
  NavigationLink,
  ContactsLink,
  UserMenuWrapper,
} from './Navigation.styled';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/userMenu/UserMenu';
export const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      <NavigationStyled>
        <HeaderNav>
          <NavigationList>
            <NavigationItem>
              <ContactsLink to="/">Home</ContactsLink>
            </NavigationItem>
            {isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/contacts">Contacts</ContactsLink>
                </NavigationItem>
                <NavigationItem>
                  <UserMenu />
                </NavigationItem>
              </>
            )}
            {!isLoggedIn && (
              <>
                <NavigationItem>
                  <UserMenuWrapper>
                    <NavigationLink to="/login">Login</NavigationLink>
                    <NavigationLink to="/register">Register</NavigationLink>
                  </UserMenuWrapper>
                </NavigationItem>
              </>
            )}
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
