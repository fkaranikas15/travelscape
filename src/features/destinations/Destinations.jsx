import { styled } from "styled-components";
import { destinations } from "../../data/AllData";
import DestinationBox from "./DestinationBox";
import { FaArrowRight } from "react-icons/fa";
import { ShowMore } from "../../ui/ShowMore";
import { device } from "../../utils/sizes";

const StyledDestinations = styled.div`
  margin-bottom: 16rem;
  text-align: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin: 4rem 0;

  @media ${device.tabletL} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }

  & div:first-child,
  & div:last-child {
    grid-column: span 2;

    @media ${device.mobile} {
      grid-column: span 1;
    }
  }
`;

function Destinations() {
  return (
    <StyledDestinations>
      <h3>Destinations</h3>
      <h4>Discover the Best Travel Experiences</h4>
      <Grid>
        {destinations
          .filter((_, i) => i < 6)
          .map((destination) => (
            <DestinationBox destination={destination} key={destination.id} />
          ))}
      </Grid>

      <ShowMore to="/destinations">
        Show More <FaArrowRight />
      </ShowMore>
    </StyledDestinations>
  );
}

export default Destinations;
