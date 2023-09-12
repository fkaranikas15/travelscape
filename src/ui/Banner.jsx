import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

const StyledBanner = styled.div`
  position: relative;
  height: 30rem;
  width: 100vw;
  background: var(--background-hero), url("/banner-img.jpg");
  background-size: cover;
  background-position: 80% 40%;
  margin-bottom: 16rem;

  & span {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--color-white);
  }
`;

function Banner() {
  const location = useLocation();

  return (
    <StyledBanner>
      <span>{location.pathname.slice(1)}</span>
    </StyledBanner>
  );
}

export default Banner;
