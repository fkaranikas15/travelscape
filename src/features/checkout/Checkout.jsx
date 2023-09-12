import styled from "styled-components";
import { useCheckout } from "../../context/CheckoutContext";
import CheckoutItem from "./CheckoutItem";
import { Button } from "../../ui/Button";
import { useState } from "react";
import { FilterList } from "../../ui/FilterList";
import EmptyCheckout from "./EmptyCheckout";

const StyledCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 16rem;

  & ul {
    max-height: 80rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    &::-webkit-scrollbar {
      width: 0.4rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 10px;
    }
  }

  & button {
    margin-top: 2rem;
    align-self: flex-end;

    &::before {
      display: none;
    }
  }
`;

function Checkout() {
  const { checkoutDestinations, checkoutTours } = useCheckout();
  const totalCheckout = [...checkoutDestinations, ...checkoutTours];
  const [showedCheckout, setShowedCheckout] = useState(totalCheckout);
  return (
    <>
      <FilterList>
        <li onClick={() => setShowedCheckout(checkoutDestinations)}>
          Destinations
        </li>
        <li onClick={() => setShowedCheckout(checkoutTours)}>Tours</li>
      </FilterList>
      {showedCheckout.length ? (
        <>
          {" "}
          <StyledCheckout>
            <div>
              <ul>
                {showedCheckout.map((insights) => (
                  <CheckoutItem insights={insights} key={insights.id} />
                ))}
              </ul>
            </div>

            <Button variation="secondary">Pay now</Button>
          </StyledCheckout>
        </>
      ) : (
        <EmptyCheckout />
      )}
    </>
  );
}

export default Checkout;
