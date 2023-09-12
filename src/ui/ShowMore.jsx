import { Link } from "react-router-dom";
import styled from "styled-components";

export const ShowMore = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: var(--color-black);
  border-bottom: 1px solid transparent;
  gap: 1rem;
  font-size: 2rem;
  transition: all 0.3s;

  &:hover {
    border-bottom: 1px solid var(--color-primary);
    color: var(--color-primary);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;
