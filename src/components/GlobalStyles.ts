import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding:0;
  }
  html {
    &::-webkit-scrollbar {
      width:0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }
  }
  body {
    font-family: 'Montserrat', sans-serif;
    width: 100%;
  }
  h2 {
    font-size: 3rem;
    font-family: 'Abril Fatface', cursive;
    font-weight: lighter;
    color: #333;
  }
  h3 {
    color: #333;
    padding: 1.5rem 0rem;
    font-size: 1.3rem;
  }
  p {
    line-height: 200%;
    color: #696969;
    font-size: 1rem;
    @media (min-width:760px) {
      font-size: 1.2rem;
    }
  }
  a {
    color: #333;
    text-decoration: none;
  }
  img {
    display: block;
  }
  input {
    font-weight: bold;
    font-family: "Montserrat", sans-serif;
  }
`;
