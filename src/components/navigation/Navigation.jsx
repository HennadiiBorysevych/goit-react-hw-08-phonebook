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
import { UserMenu } from 'components/userMenu/UserMenu';
import { useSelectors } from 'components/hooks/UseSelector';

export const Navigation = () => {
  const { isLoggedIn } = useSelectors();

  return (
    <>
      <NavigationStyled>
        <HeaderNav>
          <NavigationList>
            {isLoggedIn && (
              <>
                <NavigationItem>
                  <ContactsLink to="/">Home</ContactsLink>
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
                  <ContactsLink to="/">Home</ContactsLink>
                </NavigationItem>
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
