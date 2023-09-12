import Blog from "../features/blog/Blog";
import Banner from "../ui/Banner";
import { Container } from "../ui/Container";

function BlogPage() {
  return (
    <>
      <Banner />
      <Container>
        <Blog />
      </Container>
    </>
  );
}

export default BlogPage;
