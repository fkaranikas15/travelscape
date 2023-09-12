import { ContainerCards } from "./ContainerCards";
import TourCard from "./TourCard";
import { tours } from "../../data/AllData";
import { MIN_CARDS_TOURS } from "../../utils/constants";
import { useState } from "react";
import ButtonBox from "../../ui/ButtonBox";

function ToursGrid() {
  const [numshowedCards, setNumShowedCards] = useState(MIN_CARDS_TOURS);
  return (
    <>
      <ContainerCards>
        {tours
          .filter((_, i) => i < numshowedCards)
          .map((tour) => (
            <TourCard tour={tour} key={tour.name} />
          ))}
      </ContainerCards>
      <ButtonBox
        startedValue={numshowedCards}
        setter={setNumShowedCards}
        minCards={MIN_CARDS_TOURS}
        maxCards={tours.length}
      />
    </>
  );
}

export default ToursGrid;
