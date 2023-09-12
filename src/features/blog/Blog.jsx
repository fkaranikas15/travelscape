import { styled } from "styled-components";
import { blogs } from "../../data/AllData";
import BlogItem from "./BlogItem";
import BlogCategories from "./BlogCategories";
import BlogRecentPosts from "./BlogRecentPosts";
import BlogTags from "./BlogTags";
import { FaSearch } from "react-icons/fa";
import { device } from "../../utils/sizes";

const StyledBlog = styled.div`
  display: grid;
  grid-template-columns: 1.7fr 1fr;
  gap: 4rem;
  margin-bottom: 16rem;

  @media ${device.tabletL} {
    grid-template-columns: 1fr;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  & h5 {
    display: block;
    position: relative;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 3.2rem;

    &::after {
      position: absolute;
      content: "";
      bottom: -0.5rem;
      left: 0;
      width: 7rem;
      height: 5px;
      background-color: var(--color-primary);
    }
  }
`;

const Search = styled.div`
  position: relative;
  & input {
    font-size: 1.8rem;
    width: 100%;
    padding: 2rem;
    border-radius: 1rem;
    border: 1px solid var(--color-light-grey);

    &::placeholder {
      color: var(--color-dark-grey);
    }

    &:focus {
      outline: none;
    }
  }
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 6.4rem;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    border: 1px solid var(--color-primary);
    background-color: var(--color-primary);
    color: var(--color-white);
    cursor: pointer;
  }
`;

const ImageBox = styled.div`
  color: var(--color-white);
  position: relative;
  height: 70rem;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }

  & p {
    position: absolute;
    top: 5%;
    left: -2%;
    font-size: 3.2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    background-color: var(--color-white);
    color: var(--color-black);
    padding: 0.4rem 4rem 0.4rem 2rem;

    -webkit-clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 88% 100%, 0 100%);
  }

  & span {
    position: absolute;
    top: 25%;
    left: 8%;
    font-size: 9.6rem;
    font-weight: 700;
    line-height: 1;
  }

  & h6 {
    font-size: 3.2rem;
    margin-left: 1rem;
  }
`;

function Blog() {
  return (
    <StyledBlog>
      <LeftSide>
        {blogs.map((blog) => (
          <BlogItem blog={blog} key={blog.id} />
        ))}
      </LeftSide>
      <RightSide>
        <Search>
          <input type="text" placeholder="Search..." />
          <button>
            <FaSearch />
          </button>
        </Search>
        <BlogCategories />
        <BlogRecentPosts />
        <BlogTags />
        <ImageBox>
          <img src="/blogs/blog.jpg" alt="A Girl" />
          <p>Travelscape</p>
          <span>
            15%
            <h6>Holidays Offer</h6>
          </span>
        </ImageBox>
      </RightSide>
    </StyledBlog>
  );
}

export default Blog;
