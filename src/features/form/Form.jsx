import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const Form = styled.form`
  padding: 2.4rem 4rem;
  background-color: var(--color-dark-white);
  background-color: ${(props) =>
    props.color ? props.color : "var(--color-dark-white)"};
  /* overflow: hidden; */

  & h5 {
    font-size: 3rem;
    margin-bottom: 2rem;
    display: block;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    grid-column: span 3;

    @media ${device.mobile} {
      font-size: 2.4rem;
    }

    &::after {
      position: absolute;
      content: "";
      bottom: -0.5rem;
      left: 0;
      width: 7rem;
      height: 5px;
      background-color: var(--color-primary);
    }
  }

  & button {
    grid-column: span 3;
    width: 50%;
    transform: translateX(50%);
    margin-top: 4rem;

    @media ${device.mobile} {
      width: 100%;
      transform: translateX(0);
    }

    &::before {
      display: none;
    }
  }
`;

export default Form;
