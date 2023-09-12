import { styled } from "styled-components";

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    background-color: var(--color-light-grey);
    border-radius: 50%;
    transition: all 0.3s;

    &:hover {
      background-color: var(--color-primary);
    }
    &:hover svg {
      fill: var(--color-white);
    }

    & svg {
      width: ${(props) => (props.iconsize ? props.iconsize : "2.4rem")};
      height: ${(props) => (props.iconsize ? props.iconsize : "2.4rem")};
      fill: var(--color-dark-grey);
      transition: all 0.3s;
    }
  }
`;
