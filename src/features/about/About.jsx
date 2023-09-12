import { styled } from "styled-components";
import { IconBox } from "../../ui/IconBox";
import {
  FaBrain,
  FaLocationArrow,
  FaMapMarkedAlt,
  FaUserCog,
} from "react-icons/fa";
import { Button } from "../../ui/Button";
import { Link } from "react-router-dom";
import { device } from "../../utils/sizes";

const StyledAbout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 4rem;
  margin-bottom: 16rem;

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
    text-align: center;
  }

  & img {
    width: 100%;

    @media ${device.tabletL} {
      display: none;
    }
  }

  & p {
    font-size: 1.8rem;
    line-height: 1.7;
    color: var(--color-dark-grey);
    margin-bottom: 4rem;
  }

  & ul {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 4rem;

    @media ${device.tabletL} {
      justify-items: center;
    }

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
    }

    & span {
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.1;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  @media ${device.tabletL} {
    display: flex;
    justify-content: center;
  }
`;

function About() {
  return (
    <StyledAbout>
      <div>
        <h3>Why choose us</h3>
        <h4>Crafting Your Dream Getaway Begins Here!</h4>
        <p>
          At Travelscape, we're passionate about transforming your travel
          aspirations into unforgettable journeys. Our team of travel experts
          specializes in curating personalized travel experiences that align
          with your unique dreams and desires.With us, your dream vacation takes
          shape, ensuring every moment becomes a cherished memory.
        </p>
        <ul>
          <li>
            <IconBox size="6.4rem" iconsize="2.8rem">
              <div>
                <FaLocationArrow />
              </div>
              <span>Tailored Travel Packages</span>
            </IconBox>
          </li>
          <li>
            <IconBox size="6.4rem" iconsize="2.8rem">
              <div>
                <FaMapMarkedAlt />
              </div>
              <span>Exquisite Destinations</span>
            </IconBox>
          </li>
          <li>
            <IconBox size="6.4rem" iconsize="2.8rem">
              <div>
                <FaBrain />
              </div>
              <span>Memorable Experiences</span>
            </IconBox>
          </li>
          <li>
            <IconBox size="6.4rem" iconsize="2.8rem">
              <div>
                <FaUserCog />
              </div>
              <span>Expert Travel Guidance</span>
            </IconBox>
          </li>
        </ul>
        <StyledLink to="/contact">
          <Button variation="secondary">Contact Us</Button>
        </StyledLink>
      </div>
      <img src="/about.png" alt="A traveler" />
    </StyledAbout>
  );
}

export default About;
