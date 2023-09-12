import { FaLayerGroup } from "react-icons/fa";
import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { device } from "../../utils/sizes";

const StyledBlogItem = styled.div`
  & img {
    width: 100%;
    height: 50rem;
    object-fit: cover;
    filter: brightness(0.7);

    @media ${device.mobile} {
      height: 30rem;
    }
  }

  & span {
    display: flex;
    align-items: center;
    margin: 1rem 0;

    & b {
      margin: 0 0.6rem;
    }

    & svg {
      margin-right: 1rem;
      fill: var(--color-primary);
    }
  }

  & h4 {
    font-size: 3.2rem;
  }

  & p {
    font-size: 1.8rem;
    line-height: 1.7;
    color: var(--color-dark-grey);
    margin-bottom: 4rem;
  }

  & button {
    margin-bottom: 4.8rem;
  }
`;

function BlogItem({ blog }) {
  const { title, content, date, img, category } = blog;
  return (
    <StyledBlogItem>
      <img src={img} alt={img} />
      <span>
        <FaLayerGroup />
        By <b> Admin </b> | {date} | {category}
      </span>
      <h4>{title}</h4>
      <p>{content}</p>
      <Button variation="secondary">take a tour</Button>
    </StyledBlogItem>
  );
}

export default BlogItem;
