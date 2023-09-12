import { styled } from "styled-components";
import { Container } from "./Container";
import { useState } from "react";
import { useCountry } from "../hooks/useCountry";
import { Button } from "./Button";

const StyledSearchBanner = styled.div`
  background: var(--background-hero), url("/search-img.jpg");
  background-size: cover;
  background-position: 0% 90%;
  background-attachment: fixed;
  /* background-color: var(--color-dark-grey); */
  padding: 4.8rem 0;
  margin-bottom: 16rem;

  & h4 {
    color: var(--color-white);
  }

  & p {
    color: var(--color-white);
    font-size: 1.8rem;
    letter-spacing: 1px;
    margin-top: -1rem;
    margin-bottom: 2rem;
  }

  & input {
    color: var(--color-white);
    display: block;
    font-size: 1.8rem;
    padding: 1.2rem 2.4rem;
    background-color: transparent;
    border: 2px solid var(--color-white);
    margin-bottom: 2rem;

    &::placeholder {
      font-size: 1.6rem;
      letter-spacing: 1px;
      color: var(--color-white);
    }

    &:focus {
      outline-color: var(--color-white);
    }

    &:disabled {
      background-color: rgba(255, 255, 255, 0.2);
      cursor: not-allowed;
    }
  }

  & span {
    font-size: 2rem;
    font-weight: 700;
    color: var(--color-white);
  }
`;

const ButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-top: 2rem;

  & button {
    &::before {
      display: none;
    }
  }
`;

function SearchBanner() {
  const [search, setSearch] = useState("");
  const [showed, setShowed] = useState(false);

  const { country, isLoading, error } = useCountry(search, showed);

  function handleCapitalClick() {
    if (search.length > 3) setShowed(true);
  }

  function handleReset() {
    setSearch("");
    setShowed(false);
  }

  return (
    <StyledSearchBanner>
      <Container>
        <h4>Let's Search a Capital</h4>
        <p>
          You can find easily the capital of your favorite country by using our
          searching system.
        </p>
        <input
          value={search}
          disabled={showed}
          type="text"
          placeholder="Country"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span>
          The Capital is:
          {error && <span> Wrong country</span>}
          {isLoading && <span> Loading...</span>}
          {showed && country[0] && !isLoading && !error && (
            <span> {country[0].capital[0]}</span>
          )}
        </span>
        <ButtonBox>
          <Button onClick={handleCapitalClick} disabled={showed}>
            search
          </Button>
          <Button onClick={handleReset}>clear</Button>
        </ButtonBox>
      </Container>
    </StyledSearchBanner>
  );
}

export default SearchBanner;
