import styled from 'styled-components';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666368;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: #f4ede8;

    &::placeholder {
      color: #666368;
    }
  }

  input:-webkit-autofill,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: #f4ede8;
    transition: background-color 5000s ease-in-out 0s;
  }

  svg {
    margin-right: 16px;
  }
`;
