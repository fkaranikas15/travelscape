import { FaTag } from "react-icons/fa";
import { styled } from "styled-components";

const StyledBox = styled.div`
  position: relative;
  height: 35rem;
  overflow: hidden;

  & img {
    width: 100%;
    height: 35rem;
    object-fit: cover;
    filter: brightness(0.4);
    transition: all 0.4s;

    &:hover {
      filter: brightness(0.8);
      transform: scale(1.1);
    }
  }
`;

const Sale = styled.span`
  display: ${(props) => (props.id === 1 || props.id === 6 ? "flex" : "none")};
  align-items: center;
  gap: 1rem;
  position: absolute;
  z-index: 10;
  top: 10%;
  left: -7%;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 1.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  padding: 1.2rem 2.4rem 1.2rem 6.4rem;
  border-radius: 10rem;
  transform: rotate(20deg);
  text-align: right;
`;

const Text = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;
  color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  gap: 1rem;
`;

const Location = styled.span`
  font-size: 2.4rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const Country = styled.span`
  font-size: 1.8rem;
  text-transform: uppercase;
  background-color: var(--color-primary);
  padding-left: 1rem;
  padding-right: 3.2rem;
`;

function DestinationBox({ destination }) {
  const { id, name, country, img } = destination;

  return (
    <StyledBox>
      <Sale id={id}>
        Sale -15% <FaTag />
      </Sale>
      <img src={img} alt={name} />
      <Text>
        <Location>{name}</Location>
        <Country>{country}</Country>
      </Text>
    </StyledBox>
  );
}

export default DestinationBox;
