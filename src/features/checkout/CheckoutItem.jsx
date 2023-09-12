import styled from "styled-components";
import { device } from "../../utils/sizes";

const StyledCheckoutItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.8rem;
  color: var(--color-dark-grey);
  background-color: var(--color-dark-white);
  border: 1px solid var(--color-primary);
  border-radius: 2rem;
  padding: 2rem 4rem 4rem 4rem;

  & h5 {
    font-size: 2rem;
    color: var(--color-black);
    margin-bottom: 2rem;
    display: block;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 2px;
    grid-column: span 3;

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

  & div {
    display: flex;
    justify-content: space-between;

    @media ${device.mobile} {
      flex-direction: column;
    }
  }
  & b {
    margin-left: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--color-black);
  }
`;

function CheckoutItem({ insights }) {
  const {
    firstName,
    lastName,
    depart,
    return: back,
    from,
    to,
    country,
    tour,
    travellers,
    id,
    type,
  } = insights;

  return (
    <StyledCheckoutItem>
      <h5>{type}</h5>
      <div>
        <span>
          First Name: <b>{firstName}</b>
        </span>
        <span>
          Last Name: <b>{lastName}</b>
        </span>
      </div>
      <div>
        <span>
          From: <b>{from}</b>
        </span>
        <span>
          To:{" "}
          <b>
            {to}, {country ? country : tour}
          </b>
        </span>
      </div>
      <div>
        <span>
          Depart: <b>{depart}</b>
        </span>
        <span>
          Return: <b>{back}</b>
        </span>
      </div>
      <div>
        <span>
          Number of travellers: <b>{travellers}</b>
        </span>
        <span>
          Checkout ID: <b>#{id}</b>
        </span>
      </div>
    </StyledCheckoutItem>
  );
}

export default CheckoutItem;
