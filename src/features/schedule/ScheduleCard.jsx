import styled from "styled-components";
import { Button } from "../../ui/Button";
import { useState } from "react";
import Modal from "../../ui/Modal";
import { device } from "../../utils/sizes";

const StyledScheduleCard = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  align-items: center;
  justify-items: center;
  background-color: var(--color-dark-white);
  padding: 4rem;
  text-align: center;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }

  & div:first-child {
    text-align: left;
    justify-self: left;

    @media ${device.tablet} {
      text-align: center;
      justify-self: center;
    }
  }

  & span {
    display: block;
    color: var(--color-dark-grey);
    margin-bottom: 0.4rem;
  }

  & h5 {
    font-size: 1.8rem;
    text-transform: uppercase;
  }

  & button {
    justify-self: right;
    @media ${device.tablet} {
      justify-self: center;
    }
    &::before {
      display: none;
    }
  }
`;

function ScheduleCard({ tour }) {
  const [openModal, setOpenModal] = useState(false);
  const { name, price, date, firstCountry } = tour;

  function handleModal() {
    setOpenModal(!openModal);
  }

  return (
    <>
      <StyledScheduleCard>
        <div>
          <span>Tour Name</span>
          <h5>{name}</h5>
        </div>
        <div>
          <span>Date</span>
          <h5>{date}</h5>
        </div>
        <div>
          <span>Price</span>
          <h5>{price} $</h5>
        </div>
        <Button variation="secondary" onClick={handleModal}>
          Book now
        </Button>
      </StyledScheduleCard>
      {openModal && (
        <Modal
          handleModal={handleModal}
          name={firstCountry}
          tour={name}
          type="tours"
        />
      )}
    </>
  );
}

export default ScheduleCard;
