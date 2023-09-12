import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import DestinationsPage from "./pages/DestinationsPage";
import AboutPage from "./pages/AboutPage";
import ToursPage from "./pages/ToursPage";
import SchedulePage from "./pages/SchedulePage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ScrollToTop from "./utils/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { CheckoutProvider } from "./context/CheckoutContext";
import CheckoutPage from "./pages/CheckoutPage";

function App() {
  return (
    <CheckoutProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/tours" element={<ToursPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
        <Footer />
        <ScrollToTop />
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3 * 1000,
            },
            error: {
              duration: 5 * 1000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "var(--color-white)",
              color: "var(--color-dark-grey)",
              boxShadow: "var(--box-shadow-light)",
            },
          }}
        />
      </BrowserRouter>
    </CheckoutProvider>
  );
}

export default App;
