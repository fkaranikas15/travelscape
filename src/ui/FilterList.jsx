import styled from "styled-components";

export const FilterList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  margin-top: -8rem;
  margin-bottom: 8rem;
  flex-wrap: wrap;
  list-style: none;

  & li {
    font-size: 2rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    background-color: var(--color-dark-white);
    padding: 0.6rem 3.2rem;
    border: 1px solid var(--color-primary);
    border-radius: 1rem;
    cursor: pointer;
    transition: all 0.3s;

    &:hover,
    &:active {
      background-color: var(--color-light-grey);
    }
  }
`;
