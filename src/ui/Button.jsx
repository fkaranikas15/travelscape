import { css, styled } from "styled-components";

const variations = {
  classic: css`
    color: var(--color-black);

    &::before {
      border: 1px solid var(--color-white);
    }

    &:hover::before {
      border: 1px solid var(--color-white);
    }

    & svg {
      fill: var(--color-primary);
    }
  `,
  primary: css`
    background-color: var(--color-dark-grey);
    color: var(--color-white);

    &:hover {
      background-color: var(--color-primary);
    }

    &::before {
      border: 1px solid var(--color-dark-grey);
    }
    &:hover::before {
      border: 1px solid var(--color-primary);
    }
  `,
  secondary: css`
    background-color: var(--color-primary);
    color: var(--color-white);

    &::before {
      border: 1px solid var(--color-primary);
    }
    &:hover::before {
      border: 1px solid var(--color-primary);
    }
  `,
};

export const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 2rem 3.2rem;
  border: 1px solid transparent;
  box-shadow: var(--box-shadow-light);

  ${(props) => variations[props.variation]}

  cursor: pointer;
  transition: all 0.3s;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: -1rem;
    right: -1rem;
    transition: all 0.3s;
  }

  &:hover::before {
    top: 0;
    right: 0;
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

Button.defaultProps = {
  variation: "classic",
};
