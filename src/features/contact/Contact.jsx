import {
  FaFacebookF,
  FaPhoneAlt,
  FaPinterestP,
  FaRegEnvelope,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { styled } from "styled-components";
import { IconBox } from "../../ui/IconBox";
import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";
import { device } from "../../utils/sizes";

const StyledContact = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap: 4rem;
  margin-bottom: 16rem;

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }

  & h5 {
    display: block;
    position: relative;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 1.6rem;

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
`;

const TextBox = styled.div`
  & p {
    font-size: 1.8rem;
    line-height: 1.7;
    color: var(--color-dark-grey);
    margin-bottom: 6.4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  & span {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-dark-grey);
  }
`;

const StyledLink = styled(Link)`
  &:visited,
  &:link {
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--color-dark-grey);
    cursor: pointer;
    transition: all 0.3s;
  }

  &:hover &:active {
    color: var(--color-primary);
  }
`;

function Contact() {
  return (
    <StyledContact>
      <TextBox>
        <h4>We are here for help you to Travel around the World!</h4>
        <p>
          At Travelscape, we are committed to elevating your travel experiences
          to match your wanderlust dreams. Our team of travel experts is
          dedicated to curating personalized travel plans that bring your dream
          vacations to life.
        </p>
        <Grid>
          <div>
            <h5>New York City, USA</h5>
            <span>4111 Mattson Street</span>
          </div>
          <div>
            <h5>Opening Hours</h5>
            <span>Mon to Fri: 9:00 am - 9:00 pm</span>
          </div>
          <div>
            <h5>Informations</h5>
            <StyledLink>
              <FaPhoneAlt />
              123-456-789
            </StyledLink>
            <StyledLink>
              <FaRegEnvelope /> travelscape@gmail.com
            </StyledLink>
          </div>
          <div>
            <h5>Follow us on</h5>
            <IconBox size="4rem">
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
          </div>
        </Grid>
      </TextBox>
      <ContactForm />
    </StyledContact>
  );
}

export default Contact;
