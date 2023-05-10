import React from 'react';
import { NavigationLink,InfoWrapper } from './UserMenu.styled';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/AuthOperations';
import { useSelectors } from 'components/hooks/UseSelector';


export const UserMenu = () => {

  const {userName} = useSelectors();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <InfoWrapper>
      <p>Welcome, {userName}</p>
      <NavigationLink onClick={handleLogout}>Logout</NavigationLink>
    </InfoWrapper>
  );
};
