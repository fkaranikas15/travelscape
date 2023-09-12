import styled from "styled-components";
import { tours } from "../../data/AllData";
import ScheduleCard from "./ScheduleCard";
import { useState } from "react";
import { FilterList } from "../../ui/FilterList";

const StyledSchedule = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 16rem;
`;

function Schedule() {
  const [filteredTours, setFilteredTours] = useState(tours);
  const seasons = tours
    .map((tour) => tour.seasons)
    .reduce((a, b) => [...a, ...b], []);
  const uniqueSeasons = [...new Set(seasons)];

  function handleFilter(season) {
    const filteredItems = tours.filter((tour) =>
      tour.seasons.find((seasonsItem) => seasonsItem === season)
    );
    setFilteredTours(filteredItems);
  }

  return (
    <>
      <FilterList>
        {uniqueSeasons.map((season) => (
          <li key={season} onClick={() => handleFilter(season)}>
            {season}
          </li>
        ))}
      </FilterList>
      <StyledSchedule>
        {filteredTours.map((tour) => (
          <ScheduleCard tour={tour} key={tour.name} />
        ))}
      </StyledSchedule>
    </>
  );
}

export default Schedule;
