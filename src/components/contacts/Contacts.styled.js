import styled from '@emotion/styled';
export const ContactsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 40px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 50px;
`;
export const ContactsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
`;

export const ContactsItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  &:hover {
    background-color: #fbcf1f;
    border-radius: 5px;

    & button {
      background: #7c3039;
    }
  }
`;
export const Button = styled.button`
background: #FBCA1F;
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
`;

export const Span = styled.span`
  font-size: 16px;
  color: #fff;
  display: flex;
  margin-right: 10px;
`;
export const SpanWrapper = styled.div`
  display: flex;
  align-items: center;
`;
