import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  ul,
  li,
  input,
  button,
  a {
    max-width: 100%;
    display: block;
  }

  body, input, textarea, label {
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 1rem;
  }
`;
