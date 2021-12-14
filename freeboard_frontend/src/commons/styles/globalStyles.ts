import { css } from "@emotion/react";

export const globalStyles = css`
  * {
    /* color: red; */
    font-family: "myFont";
  }

  @font-face {
    font-family: "myFont";
    src: url("/fonts/NotoSansKR-Regular.woff");
  }

  @font-face {
    font-family: "Montserrat";
    src: url("/fonts/Montserrat-ExtraLight.ttf");
  }

  @font-face {
    font-family: "Montserrat-Light";
    src: url("/fonts/Montserrat-Light.ttf");
  }

  @font-face {
    font-family: "Montserrat-Medium";
    src: url("/fonts/Montserrat-Medium.ttf");
  }

  @font-face {
    font-family: "Montserrat-Bold";
    src: url("/fonts/Montserrat-Bold.ttf");
  }

  @font-face {
    font-family: "Shippori";
    src: url("/fonts/ShipporiAntiqueB1-Regular.ttf");
  }
`;
