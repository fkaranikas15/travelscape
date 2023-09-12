import { createGlobalStyle } from "styled-components";
import { device } from "../utils/sizes";

const GlobalStyles = createGlobalStyle`
:root{
  --color-white:#fff;
  --color-dark-white:#F8F8F8;
  --color-black:#222;
  --color-primary:#008db3;
  --color-dark-grey:#777;
  --color-light-grey:#ddd;

  --background-hero:linear-gradient(
      90deg,
      rgba(0, 201, 255, 0.7) 0%,
      rgba(146, 254, 157, 0.7) 100%
    );
  --background-navigation:linear-gradient(90deg,rgb(0, 201, 255), rgb(146, 254, 157));

  --box-shadow-light:0 1rem 3rem rgba(0, 0, 0, 0.2);
  --box-shadow-dark:0 1rem 3rem rgba(0, 0, 0, 0.3);
}

*,*::after,*::before{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;

  @media ${device.laptopS} {
    font-size: 56.25%;
  }
   @media ${device.mobileS} {
    font-size: 50%;
  }
}

body{
  overflow-x: hidden;
  font-family: 'lato',sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: var(--color-black);

  &::-webkit-scrollbar {
      width: 1rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 10px;
    }
}

h1{
  margin-top: 2rem;
  font-size: 6.4rem;
  text-transform: uppercase;
  line-height: 1.4;
  color: var(--color-white);

  @media ${device.laptop} {
    font-size: 5.2rem;
  }
}
h2{
  font-size: 4.8rem;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.2;
  margin-bottom: 4.8rem;
  color: var(--color-white);
  @media ${device.laptop} {
    font-size: 4rem;
  }
}
h3{
  position: relative;
  width: 22rem;
  display: inline-flex;
  justify-content: center;
  font-size: 1.8rem;
  padding: 0 3rem ;
  text-transform: uppercase;
  color: var(--color-white);
  margin-bottom: 2.4rem;
  &::after{
    content: '';
    position: absolute;
    top: -10%;
    left: 0;
    width: 100%;
    height: 130%;
    z-index: -1;
    background: url('/painting.svg');
    background-repeat: no-repeat;
  }
  
}
h4{
  font-size: 4rem;
  line-height: 1.2;
  margin-bottom: 1.8rem;

}
`;

export default GlobalStyles;
