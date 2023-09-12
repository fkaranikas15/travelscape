import { FaEye, FaHistory } from "react-icons/fa";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";

const StyledHistory = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: center;
  margin-bottom: 16rem;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  & div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 6rem;
    background-color: var(--color-dark-white);

    @media ${device.tablet} {
      padding: 6rem;
    }
  }

  & p {
    font-size: 1.8rem;
    color: var(--color-dark-grey);
    line-height: 1.7;
  }

  & svg {
    width: 6.4rem;
    height: 6.4rem;
    margin-bottom: 1rem;
    fill: var(--color-primary);
  }

  & img {
    width: 100%;
    height: 45rem;
    object-fit: cover;
    filter: brightness(0.8);
  }

  @media ${device.tablet} {
    & img:nth-child(3) {
      grid-row: 4;
    }
  }
`;

function History() {
  return (
    <StyledHistory>
      <div>
        <FaHistory />
        <h4>Our History</h4>
        <p>
          Established in 2005, Travelscape has been a trusted name in the travel
          industry for 18 years. Our journey began with a shared passion for
          wanderlust and a commitment to turning travel dreams into reality
        </p>
      </div>
      <img src="/history1.jpg" alt="our company" />
      <img src="/history2.jpg" alt="our company" />
      <div>
        <FaEye />
        <h4>Our Vision</h4>
        <p>
          Over the years, we've evolved into a dedicated team of travel experts,
          consistently providing personalized and unforgettable travel
          experiences to our valued clients.
        </p>
      </div>
    </StyledHistory>
  );
}

export default History;
