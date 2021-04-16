import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #232129;
  border-radius: 10px;
  padding: 16px;
  width: 100%;
  border: 2px solid #232129;
  color: #666368;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

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
