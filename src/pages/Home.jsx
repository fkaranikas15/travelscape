import RecentBlog from "../features/blog/RecentBlog";
import Destinations from "../features/destinations/Destinations";
import Hero from "../features/hero/Hero";
import Tour from "../features/tour/Tour";
import WhoWeAre from "../features/whoweare/WhoWeAre";
import CallToAction from "../ui/CallToAction";
import { Container } from "../ui/Container";
import SearchBanner from "../ui/SearchBanner";

function Home() {
  return (
    <>
      <Hero />
      <Container>
        <WhoWeAre />
        <Destinations />
      </Container>
      <SearchBanner />
      <Container>
        <Tour />
        <RecentBlog />
      </Container>
      <CallToAction />
    </>
  );
}

export default Home;
