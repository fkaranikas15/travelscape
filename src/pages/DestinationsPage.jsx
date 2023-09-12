import DestinationsGrid from "../features/destinations/DestinationsGrid";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function DestinationsPage() {
  return (
    <>
      <Banner />
      <Container>
        <DestinationsGrid />
      </Container>
    </>
  );
}

export default DestinationsPage;
