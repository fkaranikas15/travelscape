import About from "../features/about/About";
import History from "../features/about/History";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function AboutPage() {
  return (
    <>
      <Banner />
      <Container>
        <About />
        <History />
      </Container>
    </>
  );
}

export default AboutPage;
