import styled from "@emotion/styled";

export const WrapperStyled = styled.div`
  background: #fff;
  width: 500px;
  margin: 65px auto;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: 0 2px 25px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 767px) {
    max-width: 300px;
    padding: 10px;
  }
`;

export const FormTitle = styled.h1`
  padding: 35px 35px 0 35px;
  font-weight: 300;
`;
export const FormContent = styled.div`
    padding: 35px;
    text-align: center;
`;
export const FormLabel = styled.label`
    padding: 12px 5px;
`;
export const FormInput = styled.input`
    font-size: 16px;
    display: block;
    font-family: 'Rubik', sans-serif;
    width: 100%;
    padding: 10px 1px;
    border: 0;
    border-bottom: 1px solid #747474;
    outline: none;
    -webkit-transition: all .2s;
    transition: all .2s;
    &::placeholder {
        text-transform: uppercase;
    }
    &:focus {
        border-color: #222;
    }

`;
export const Buttons = styled.div`
    display: -webkit-box;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
`;
export const SubmitButton = styled.button`
    width: 100%;
    border: none;
    padding: 18px;
    font-family: 'Rubik', sans-serif;
    cursor: pointer;
    text-transform: uppercase;
    background: #e8e9ec;
    color: #777;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 4px;
    letter-spacing: 0.2px;
    outline: 0;
    -webkit-transition: all .3s;
    transition: all .3s;
    &:hover {
        background: #d5d6d9;
    }
    &:active {
        background: #c4c5c8;
    }
`;
