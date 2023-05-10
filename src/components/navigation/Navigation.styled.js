import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const NavigationStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const NavigationList = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  padding: 0 20px;
`;
export const NavigationItem = styled.li`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #000;
  &:hover {
    color: #f00;
  }
`;
export const NavigationLink = styled(Link)`
  background: #fbca1f;
  font-family: inherit;
  color: #000;
  padding: 0.6em 1.3em;
  font-weight: 900;
  font-size: 18px;
  border: 3px solid black;
  border-radius: 0.4em;
  box-shadow: 0.1em 0.1em;
  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }
  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }
`;
export const ContactsLink = styled(Link)`
  color: #000;
  font-family: inherit;
  display: inline-block;
  padding: 1.1em 0;
  font-weight: 900;
  font-size: 18px;
  &:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.09em 0.09em;
  }
  &:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }
  &:first-of-type {
    margin-right: 15px;
  }
`;

export const UserMenuWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
