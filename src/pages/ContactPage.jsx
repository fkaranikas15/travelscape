import Contact from "../features/contact/Contact";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function ContactPage() {
  return (
    <>
      <Banner />
      <Container>
        <Contact />
      </Container>
    </>
  );
}

export default ContactPage;
