import { styled } from "styled-components";
import { tours } from "../../data/AllData";
import TourCard from "./TourCard";
import { ShowMore } from "../../ui/ShowMore";
import { FaArrowRight } from "react-icons/fa";
import { ContainerCards } from "./ContainerCards";
import { device } from "../../utils/sizes";

const StyledTour = styled.div`
  text-align: center;
  margin-bottom: 16rem;

  & p {
    color: var(--color-dark-grey);
    width: 50%;
    transform: translateX(50%);
    margin-bottom: 4.8rem;

    @media ${device.tablet} {
      width: 100%;
      transform: translateX(0);
    }
  }
`;

function Tour() {
  return (
    <StyledTour>
      <h3>Our Tours</h3>
      <h4>Exclusive Pricing Plan</h4>
      <p>
        These tours offer a mix of cultural, natural, and adventure experiences,
        catering to travelers interested in exploring Europe, America, and Asia.
      </p>
      <ContainerCards>
        {tours
          .filter((_, i) => i < 3)
          .map((tour) => (
            <TourCard tour={tour} key={tour.name} />
          ))}
      </ContainerCards>
      <ShowMore to="/tours">
        Show More <FaArrowRight />
      </ShowMore>
    </StyledTour>
  );
}

export default Tour;
