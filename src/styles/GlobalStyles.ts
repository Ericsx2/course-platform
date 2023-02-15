import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    color: currentColor;
  }

  a, button, input, textarea {
    font-family: "Inter", sans-serif;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.main};
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.secondary};
  }
`;
