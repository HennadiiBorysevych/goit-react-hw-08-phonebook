import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationLink,InfoWrapper } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/AuthOperations';

export const UserMenu = () => {
  const name = useSelector(state => state.auth.user.name);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <InfoWrapper>
      <p>Welcome, {name}</p>
      <NavigationLink onClick={handleLogout}>Logout</NavigationLink>
    </InfoWrapper>
  );
};
