import {createGlobalStyle} from 'styled-components'import {colors} from '../colors'import {typography} from '../typography'export const GlobalStyle = createGlobalStyle`  body {    margin: 0;    padding: 0;    color: ${() => colors.grayscale[900]};    background-color: ${() => colors.grayscale[0]};    ${() => typography.normal24}  }  * {    box-sizing: border-box;    font-family: "Roboto", sans-serif;  }  a {    text-decoration: none;    color: ${() => colors.grayscale[900]};  }  img {    max-width: 100%;    height: auto;  }  ul {    padding: 0;    margin: 0;    list-style: none;  }  li {    list-style: none;  }  p, h1, h2, h3, h4 {    padding: 0;    margin: 0;  }  span {    display: inline-block;  }`