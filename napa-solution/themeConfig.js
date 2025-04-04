import { createGlobalStyle } from "styled-components";
// Two theme not useful, because we use css and you should edit in global.module.css
// with .light-mode and .dark-mode
export const lightTheme = {
  body: "#FFF",
  text: "#363537",
  toggleBorder: "#FFF",
  background: "#363537",
};

export const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  background: "#999",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, Noto Sans JP, sans-serif;
    transition: all 0.50s linear;
  }`;
