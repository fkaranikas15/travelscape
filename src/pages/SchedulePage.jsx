import Schedule from "../features/schedule/Schedule";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function SchedulePage() {
  return (
    <>
      <Banner />
      <Container>
        <Schedule />
      </Container>
    </>
  );
}

export default SchedulePage;
