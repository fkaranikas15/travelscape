import { styled } from "styled-components";

const Textarea = styled.textarea`
  padding: 1.2rem 2.4rem;
  border: 1px solid var(--color-primary);
  border-radius: 1rem;
  background-color: var(--color-white);
  box-shadow: var(--box-shadow-light);
  width: 100%;
  height: 10rem;
  margin-bottom: 2rem;

  &:focus {
    outline: 1px solid var(--color-primary);
  }
`;

export default Textarea;
