import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
import { useDispatch } from 'react-redux';

export const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const userInfo = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    };

    const passwordRegex = /^.{7,}$/;
    const fullNameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;

    const isPasswordValid = passwordRegex.test(userInfo.password);
    const isFullNameValid = fullNameRegex.test(userInfo.name);

    if (!isPasswordValid) {
      toast.info('Password must be at least 7 digits');
      return;
    }

    if (!isFullNameValid) {
      toast.error('Full name must consist of 2 words separated by a space');
      return;
    }

    dispatch(signUp(userInfo));
    e.target.reset();
  };

  return (
    <WrapperStyled>
      <form onSubmit={handleSubmit} autoComplete="on">
        <FormTitle>Sign Up</FormTitle>
        <FormContent>
          <FormLabel>
            <FormInput type="text" placeholder="Full Name" />
          </FormLabel>
          <FormLabel>
            <FormInput type="email" placeholder="Email" />
          </FormLabel>
          <FormLabel>
            <FormInput type="password" placeholder="Password" />
          </FormLabel>
        </FormContent>
        <Buttons>
          <SubmitButton type="submit">Sign Up</SubmitButton>
        </Buttons>
      </form>
      <ToastContainer />
    </WrapperStyled>
  );
};
