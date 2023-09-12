import { styled } from "styled-components";
import { Container } from "./Container";
import { Button } from "./Button";
import { FaEdit } from "react-icons/fa";

const StyledCTA = styled.div`
  padding: 6.4rem 0;
  background: var(--background-hero), url("/cta-image.jpg");
  background-attachment: fixed;
  background-position: 80% 20%;

  & h5 {
    font-size: 4rem;
    line-height: 1.1;
    color: var(--color-white);
  }

  & h6 {
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
    & span {
      color: var(--color-white);
    }
  }
`;

function CallToAction() {
  return (
    <StyledCTA>
      <Container>
        <h5>Need a Professional Traveler?</h5>
        <h6>
          <span>Call:</span>
          123-345-789
        </h6>
        <Button variation="classic">
          Book Now <FaEdit />
        </Button>
      </Container>
    </StyledCTA>
  );
}

export default CallToAction;
