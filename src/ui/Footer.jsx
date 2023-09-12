import { styled } from "styled-components";
import { Container } from "./Container";
import {
  FaFacebookF,
  FaFax,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPinterestP,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IconBox } from "./IconBox";
import { device } from "../utils/sizes";

const StyledFooter = styled.footer`
  padding: 6.4rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--color-light-grey);

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
    justify-items: left;
    gap: 4rem;
  }

  & h5 {
    display: block;
    position: relative;
    font-size: 2.4rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 3.2rem;

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

  & ul {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    list-style: none;

    @media ${device.tabletL} {
      align-items: center;
    }
  }
`;

const FooterTextBox = styled.div`
  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    justify-self: center;
  }

  @media ${device.tablet} {
    width: 75%;
  }

  @media ${device.mobile} {
    width: 100%;
  }

  & span {
    color: var(--color-dark-grey);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;

  & img {
    width: 10rem;
  }

  & p {
    color: var(--color-dark-grey);
  }
`;

const FooterNav = styled.nav`
  justify-self: center;
  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-size: 2rem;
    text-decoration: none;
    color: var(--color-dark-grey);
    transition: all 0.3s;
  }

  &:hover,
  &:active {
    color: var(--color-primary);
  }
`;

const FooterInfo = styled.div`
  justify-self: center;
  @media ${device.tabletL} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Container>
      <StyledFooter>
        <FooterTextBox>
          <ImageBox>
            <img src="/footer-logo.png" alt="Logo in footer" />
            <p>
              Elevate your travel experiences with our comprehensive solutions
              designed to help you reach your wanderlust dreams.
            </p>
          </ImageBox>
          <IconBox size="4.8rem">
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaPinterestP />
            </div>
            <div>
              <FaYoutube />
            </div>
          </IconBox>
          <span>{`Privacy Policy | ${year} Travelscape`}</span>
        </FooterTextBox>
        <FooterNav>
          <h5>Company</h5>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/schedule">Schedule</StyledLink>
            </li>
            <li>
              <StyledLink to="/destinations">Destinations</StyledLink>
            </li>
            <li>
              <StyledLink>FAQs</StyledLink>
            </li>
            <li>
              <StyledLink>Help Center</StyledLink>
            </li>
          </ul>
        </FooterNav>
        <FooterInfo>
          <h5>informations</h5>
          <ul>
            <li>
              <StyledLink>
                <FaMapMarkerAlt /> 4111 Mattson Street
              </StyledLink>
            </li>
            <li>
              <StyledLink>
                <FaPhoneAlt /> Call us: 123-456-789
              </StyledLink>
            </li>
            <li>
              <StyledLink>
                <FaRegEnvelope /> Email: travelscape@gmail.com
              </StyledLink>
            </li>
            <li>
              <StyledLink>
                <FaFax /> Fax: 123456
              </StyledLink>
            </li>
          </ul>
        </FooterInfo>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
