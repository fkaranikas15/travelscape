import styled from "styled-components";
import { device } from "../../utils/sizes";

export const ContainerCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem, 1fr));
  gap: 2rem;
  row-gap: 4.8rem;
  margin-bottom: 4.8rem;
  text-align: center;

  @media ${device.mobileS} {
    grid-template-columns: 1fr;
  }
`;
