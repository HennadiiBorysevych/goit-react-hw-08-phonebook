import React from 'react';
import {LoginStyled,RegisterButton,Buttons,LoginContent,LoginButton,LoginTitle,LoginLabel,LoginInput} from './Login.styles'
export const Login = () => {
  return (
    <LoginStyled>
      <form>
        <LoginTitle>Login</LoginTitle>
        <LoginContent className="content">
          <LoginLabel className="input-field">
            <LoginInput type="email" placeholder="Email" />
          </LoginLabel>
          <LoginLabel className="input-field">
            <LoginInput type="password" placeholder="Password" />
          </LoginLabel>
        </LoginContent>
        <Buttons className="action">
          <RegisterButton>Register</RegisterButton>
          <LoginButton>Sign in</LoginButton>
        </Buttons>
      </form>
    </LoginStyled>
  );
};
