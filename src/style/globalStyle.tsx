import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
  :root {

  }

  :root {
    --font--Thin: 'Pretendard-Thin';
    --font--Regular: 'Pretendard-Regular';
    --font--Medium: 'Pretendard-Medium';
    --font--SemiBold: 'Pretendard-semiBold';
    --font--Bold: 'Pretendard-Bold';
  }

  body {
    font-family: var(--font--Regular);
  }

  button {
    all: unset;
    font-family: var(--font--Medium);
    text-align: center;
    cursor: pointer;
  }
  
  img {
    vertical-align: top;
  }

  a {
    color: black;
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  ul, li, p, h3, div, body {
    margin: 0;
    padding: 0;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;
export default GlobalStyle;
