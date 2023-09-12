import { styled } from "styled-components";

const StyledBlogTags = styled.div`
  padding: 4rem;
  background-color: var(--color-dark-white);

  & ul {
    list-style: none;
    display: flex;
    gap: 1.2rem;
    flex-wrap: wrap;
  }

  & li {
    background-color: var(--color-white);
    color: var(--color-dark-grey);
    border-radius: 1rem;
    padding: 0.6rem 1.2rem;
    font-size: 1.8rem;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      color: var(--color-primary);
    }
  }
`;

function BlogTags() {
  return (
    <StyledBlogTags>
      <h5>Popular Tags</h5>
      <ul>
        <li>#Travel</li>
        <li>#SoloTravel</li>
        <li>#Experiences</li>
        <li>#World</li>
        <li>#Food</li>
        <li>#Cultures</li>
        <li>#Vacations</li>
        <li>#Adventure</li>
      </ul>
    </StyledBlogTags>
  );
}

export default BlogTags;
