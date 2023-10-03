import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import Footer from "./ui/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import { Toaster } from "react-hot-toast";
import { CheckoutProvider } from "./context/CheckoutContext";
import { Suspense, lazy } from "react";
import Spinner from "./ui/Spinner";

const Home = lazy(() => import("./pages/Home"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SchedulePage = lazy(() => import("./pages/SchedulePage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ToursPage = lazy(() => import("./pages/ToursPage"));
const DestinationsPage = lazy(() => import("./pages/DestinationsPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));

function App() {
  return (
    <CheckoutProvider>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Suspense fallback={<Spinner />}>
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
        </Suspense>
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
