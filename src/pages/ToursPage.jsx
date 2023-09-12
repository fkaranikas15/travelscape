import ToursGrid from "../features/tour/ToursGrid";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function ToursPage() {
  return (
    <>
      <Banner />
      <Container>
        <ToursGrid />
      </Container>
    </>
  );
}

export default ToursPage;
