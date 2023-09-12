import { useState } from "react";
import { styled } from "styled-components";
import { MIN_CARDS_DESTINATIONS } from "../../utils/constants";
import { destinations } from "../../data/AllData";
import DestionationCard from "./DestionationCard";
import ButtonBox from "../../ui/ButtonBox";

const StyledDestinationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 4rem;
`;

function DestinationsGrid() {
  const [numshowedCards, setNumShowedCards] = useState(MIN_CARDS_DESTINATIONS);

  return (
    <>
      <StyledDestinationsGrid>
        {destinations
          .filter((_, i) => i < numshowedCards)
          .map((destination) => (
            <DestionationCard destination={destination} key={destination.id} />
          ))}
      </StyledDestinationsGrid>
      <ButtonBox
        startedValue={numshowedCards}
        setter={setNumShowedCards}
        minCards={MIN_CARDS_DESTINATIONS}
        maxCards={destinations.length}
      />
    </>
  );
}

export default DestinationsGrid;
