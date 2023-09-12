import styled from "styled-components";
import { Button } from "./Button";

const StyledButtonBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8rem;
  margin-bottom: 16rem;
`;

function ButtonBox({ minCards, maxCards, setter, startedValue }) {
  function handleShowMore() {
    setter(maxCards);
  }

  function handleShowLess() {
    setter(minCards);
  }

  return (
    <StyledButtonBox>
      {startedValue === minCards ? (
        <Button variation="primary" onClick={handleShowMore}>
          Show More
        </Button>
      ) : (
        <Button variation="primary" onClick={handleShowLess}>
          Show Less
        </Button>
      )}
    </StyledButtonBox>
  );
}

export default ButtonBox;
