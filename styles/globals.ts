import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    transition: background-color 0.3s, color 0.3s;
  }
    inputArea{
        color: red;
    }
`;

export default GlobalStyle;