import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { FaGlobe } from "react-icons/fa";
import { useState } from "react";
import Modal from "../../ui/Modal";

const StyledDestinationCard = styled.div`
  position: relative;
  height: 50rem;
  border-top: 5px solid var(--color-primary);
  border-radius: 2rem;
  box-shadow: var(--box-shadow-light);
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.6);
    transition: all 0.4s;

    &:hover {
      filter: brightness(0.7);
    }
  }
`;

const TextBox = styled.div`
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: var(--color-white);
  letter-spacing: 1px;
`;

const Location = styled.span`
  display: block;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 1;
`;

const Country = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  margin-bottom: 3.2rem;
`;

function DestionationCard({ destination }) {
  const [openModal, setOpenModal] = useState(false);
  const { name, country, img } = destination;

  function handleModal() {
    setOpenModal(!openModal);
  }
  return (
    <>
      <StyledDestinationCard>
        <img src={img} alt={name} />
        <TextBox>
          <Location>{name}</Location>
          <Country>
            <FaGlobe /> {country}
          </Country>
          <Button variation="secondary" onClick={handleModal}>
            Travel now
          </Button>
        </TextBox>
      </StyledDestinationCard>
      {openModal && (
        <Modal
          handleModal={handleModal}
          name={name}
          country={country}
          type="destinations"
        />
      )}
    </>
  );
}

export default DestionationCard;
