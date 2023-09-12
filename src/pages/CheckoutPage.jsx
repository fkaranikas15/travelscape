import Checkout from "../features/checkout/Checkout";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function CheckoutPage() {
  return (
    <>
      <Banner />
      <Container>
        <Checkout />
      </Container>
    </>
  );
}

export default CheckoutPage;
