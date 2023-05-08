import React from 'react';
import {
  WrapperStyled,
  Buttons,
  FormContent,
  SubmitButton,
  FormTitle,
  FormLabel,
  FormInput,
} from './Form.styled';

import { signIn } from 'redux/Auth/AuthOperations';
import {  useDispatch } from 'react-redux';

export const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const userInfo = {
      email: e.target[0].value,
      password: e.target[1].value,
    };
    dispatch(signIn(userInfo));
  };

  return (
    <WrapperStyled>
      <form onSubmit={handleSubmit} autoComplete="on">
        <FormTitle>Login</FormTitle>
        <FormContent>
          <FormLabel>
            <FormInput type="email" placeholder="Email" />
          </FormLabel>
          <FormLabel>
            <FormInput type="password" placeholder="Password" />
          </FormLabel>
        </FormContent>
        <Buttons>
          <SubmitButton type="submit">Submit</SubmitButton>
        </Buttons>
      </form>
    </WrapperStyled>
  );
};
