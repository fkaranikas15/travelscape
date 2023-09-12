import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledShareBox = styled.div`
  position: absolute;
  right: -40%;
  top: 40%;
  display: flex;
  align-items: center;
  gap: 2rem;
  transform: rotate(90deg);

  @media ${device.mobile} {
    display: none;
  }

  & p {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-white);
    letter-spacing: 5px;
    transform: rotate(180deg);
  }
`;

const WhiteRow = styled.div`
  width: 4rem;
  height: 3px;
  background-color: var(--color-white);
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  & svg {
    cursor: pointer;
    transform: rotate(270deg);
    fill: var(--color-white);
    width: 2.4rem;
    height: 2.4rem;
    transition: all 0.4s;

    &:hover {
      fill: var(--color-black);
    }
  }
`;

function ShareBox() {
  return (
    <StyledShareBox>
      <p>share</p>
      <WhiteRow>&nbsp;</WhiteRow>
      <IconBox>
        <FaInstagram />
        <FaTwitter />
        <FaFacebook />
      </IconBox>
    </StyledShareBox>
  );
}

export default ShareBox;
