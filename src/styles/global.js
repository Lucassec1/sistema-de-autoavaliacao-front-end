import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root {
        --Text: #252628;
        --SecondaryText: #36383A;
        --TextfieldBorder: #616365;
        --LowkeyText: #7A7D7F;
        --Divider: #EBEBEB;
        --Background:  #F7F7F7;

        --Primary: #347AE2;
        --PrimaryHover: #2269D3;
        --BlueBackground: #E9F0FC;

        --Error: #FF324B;
        --Warning: #FFD747;
        --Success: #00DC7D;

        --Mulish: 'Mulish', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    #root {
        font-family: var(--Mulish);
    }

    body {
        overflow-x: hidden;
    }
`;

export default GlobalStyle;