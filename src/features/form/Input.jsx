import { styled } from "styled-components";

const Input = styled.input`
  border: 1px solid var(--color-primary);
  background-color: var(--color-white);
  border-radius: 1rem;
  box-shadow: var(--box-shadow-light);
  padding: 1.2rem 2rem;

  &:focus {
    outline: 1px solid var(--color-primary);
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--color-light-grey);
    color: var(--color-black);
    text-transform: uppercase;
  }
`;

export default Input;
