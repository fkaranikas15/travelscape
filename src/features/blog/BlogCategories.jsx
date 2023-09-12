import { styled } from "styled-components";
import { blogs } from "../../data/AllData";
import { FaChevronRight } from "react-icons/fa";

const StyledBlogCategories = styled.div`
  padding: 4rem;
  background-color: var(--color-dark-white);

  & ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-size: 1.8rem;
  }

  & li {
    display: flex;
    align-items: center;
    color: var(--color-dark-grey);
    padding: 1.2rem 0;
    border-bottom: 1px solid var(--color-dark-grey);
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--color-primary);
    }

    & svg {
      margin-right: 1rem;
    }

    & span {
      margin-left: auto;
    }
  }
`;

function BlogCategories() {
  const categories = blogs.map((blog) => blog.category);
  return (
    <StyledBlogCategories>
      <h5>Categories</h5>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <FaChevronRight />
            {category}
            <span>( {Math.floor(Math.random() * 6 + 1)} )</span>
          </li>
        ))}
      </ul>
    </StyledBlogCategories>
  );
}

export default BlogCategories;
