import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/sizes";

const StyledEmptyCheckout = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 16rem;

  & p {
    width: 75%;
    font-size: 2.4rem;
    line-height: 1.7;
    text-align: center;

    @media ${device.mobile} {
      width: 100%;
    }
  }

  & a {
    &:visited,
    &:link {
      color: var(--color-primary);
      margin: 0 0.4rem;
    }
  }
`;

function EmptyCheckout() {
  return (
    <StyledEmptyCheckout>
      <p>
        Oops! It seems your cart is currently empty. Don't worry; there are
        plenty of exciting <Link to="/destinations">destinations</Link> and
        <Link to="/tours">tours</Link> waiting for you. Explore our website to
        discover your next adventure, or browse our curated selection of travel
        options. If you have any questions or need assistance, feel free
        <Link to="/contact">to reach out to our team</Link>. We're here to help
        you plan your dream vacation!
      </p>
    </StyledEmptyCheckout>
  );
}

export default EmptyCheckout;
