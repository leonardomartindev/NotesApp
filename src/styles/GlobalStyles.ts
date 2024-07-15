import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html{
        font-size: 62.5%;
        box-sizing: border-box;

        @media (max-width: 1000px) {
            font-size: 50%;
        }
    }
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        transition: background-color 0.50s linear;
        font-family: "Roboto", sans-serif;
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
        height: 100%;
}
`;

export default GlobalStyles;
