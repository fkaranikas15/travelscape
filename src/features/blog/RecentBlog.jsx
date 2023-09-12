import { styled } from "styled-components";
import { blogs } from "../../data/AllData";
import BlogCard from "./BlogCard";
import { device } from "../../utils/sizes";

const StyledRecentBlog = styled.div`
  text-align: center;
  margin-bottom: 16rem;

  & p {
    color: var(--color-dark-grey);
    width: 50%;
    transform: translateX(50%);
    margin-bottom: 4.8rem;
    @media ${device.tablet} {
      width: 100%;
      transform: translateX(0);
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media ${device.laptopS} {
    grid-template-columns: repeat(auto-fit, minmax(45rem, 1fr));
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

function RecentBlog() {
  return (
    <StyledRecentBlog>
      <h3>Latest blog</h3>
      <h4>Our Recent News</h4>
      <p>
        So, grab a cup of your favorite beverage and join us as we explore the
        ever-evolving world of travel.
      </p>
      <Grid>
        {blogs
          .filter((_, i) => i < 2)
          .map((blog) => (
            <BlogCard blog={blog} key={blog.id} />
          ))}
      </Grid>
    </StyledRecentBlog>
  );
}

export default RecentBlog;
