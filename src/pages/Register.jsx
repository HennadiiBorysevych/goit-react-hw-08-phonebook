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

import { signUp } from 'redux/Auth/AuthOperations';
import {  useDispatch } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const userInfo = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    dispatch(signUp(userInfo));
    e.target.reset();
  };

  return (
    <WrapperStyled>
      <form onSubmit={handleSubmit} autoComplete="on">
        <FormTitle>Sign Up</FormTitle>
        <FormContent>
          <FormLabel>
            <FormInput type="text" placeholder="Name" />
          </FormLabel>
          <FormLabel>
            <FormInput type="email" placeholder="Email" />
          </FormLabel>
          <FormLabel>
            <FormInput type="password" placeholder="Password" />
          </FormLabel>
        </FormContent>
        <Buttons>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Buttons>
      </form>
    </WrapperStyled>
  );
};
