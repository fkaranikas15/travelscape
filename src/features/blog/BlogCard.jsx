import { styled } from "styled-components";
import { Button } from "../../ui/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { device } from "../../utils/sizes";

const StyledBlogCard = styled.div`
  text-align: left;
  padding: 4.8rem;
  box-shadow: var(--box-shadow-light);
  display: grid;
  gap: 1rem;
  grid-template-columns: ${(props) => props.id === 1 && "1fr 30rem"};
  grid-column: ${(props) => props.id === 1 && "span 2"};

  @media ${device.laptopS} {
    display: block;
    grid-column: span 1;
  }
  & img {
    width: 100%;
    object-fit: cover;
    align-self: center;
    filter: brightness(0.7);
    border: 1px solid var(--color-primary);
    padding: 0.6rem;

    @media ${device.laptopS} {
      display: none;
    }
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & span {
    display: inline-block;
    font-size: 1.8rem;
    font-weight: 700;
    border: 1px solid var(--color-black);
    border-radius: 2rem;
    padding: 0.2rem 1rem;
    margin-bottom: 2rem;
  }

  & h5 {
    font-size: 2rem;
    margin-bottom: 1.6rem;
  }

  & blockquote {
    display: inline-block;
    color: var(--color-dark-grey);
    margin-bottom: auto;
  }

  & button {
    margin-top: 4rem;
    &::before {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function BlogCard({ blog }) {
  const { id, title, description, date, img } = blog;
  return (
    <StyledBlogCard id={id}>
      <FlexBox>
        <span>{date}</span>
        <h5>{title}</h5>
        <blockquote>{description}</blockquote>
        <StyledLink to="/blog">
          <Button variation="secondary">
            Read more <FaArrowRight />
          </Button>
        </StyledLink>
      </FlexBox>
      {id === 1 && <img src={img} alt={img} />}
    </StyledBlogCard>
  );
}

export default BlogCard;
