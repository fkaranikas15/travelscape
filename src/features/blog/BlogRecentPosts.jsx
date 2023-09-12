import { styled } from "styled-components";
import { blogs } from "../../data/AllData";
import { device } from "../../utils/sizes";

const StyledBlogRecentPosts = styled.div`
  padding: 4rem;
  background-color: var(--color-dark-white);

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & li {
    display: flex;

    gap: 2rem;

    & img {
      width: 9.6rem;
      height: 9.6rem;
      object-fit: cover;
      object-position: center;
      filter: brightness(0.6);
    }

    & span {
      display: block;
      font-size: 1.4rem;
      font-weight: 700;
      color: var(--color-dark-grey);
      margin-bottom: 0.6rem;
    }

    & h6 {
      font-size: 1.5rem;
      cursor: pointer;
      transition: all 0.3s;

      @media ${device.tabletL} {
        font-size: 1.8rem;
      }

      &:hover {
        color: var(--color-primary);
      }
    }
  }
`;

function BlogRecentPosts() {
  return (
    <StyledBlogRecentPosts>
      <h5>Recent Posts</h5>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <img src={blog.img} alt={blog.img} />
            <div>
              <span>{blog.date}</span>
              <h6>{blog.title}</h6>
            </div>
          </li>
        ))}
      </ul>
    </StyledBlogRecentPosts>
  );
}

export default BlogRecentPosts;
