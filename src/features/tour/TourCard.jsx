import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const StyledTourCard = styled.div`
  box-shadow: var(--box-shadow-light);
  position: relative;
  padding-bottom: 10rem;
  & img {
    width: 100%;
    filter: brightness(0.7);
    margin-bottom: 3.2rem;
    transition: all 0.3s;

    &:hover {
      filter: brightness(1);
    }
  }

  & h5 {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2.4rem;
    text-transform: uppercase;
    padding: 1rem 4rem;
    background-color: var(--color-white);
    margin-top: -8rem;
  }

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    font-size: 1.8rem;
    color: var(--color-dark-grey);
    margin-bottom: 4rem;
  }

  & button {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Price = styled.span`
  font-size: 4.8rem;
  font-weight: 700;

  & span {
    display: block;
    font-size: 1.6rem;
    color: var(--color-dark-grey);
    margin-top: -1.6rem;
    margin-bottom: 2rem;
  }
  & span:first-child {
    margin-bottom: 0;
    display: inline-block;
    font-size: 2.4rem;
    color: var(--color-black);
  }
`;

function TourCard({ tour }) {
  const { name, price, features, img } = tour;
  return (
    <StyledTourCard>
      <img src={img} alt={name} />
      <h5>{name}</h5>
      <Price>
        {price} <span>$</span> <span>/ person</span>{" "}
      </Price>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link to="/schedule">
        <Button variation="secondary">
          Book now <FaArrowRight />
        </Button>
      </Link>
    </StyledTourCard>
  );
}

export default TourCard;
