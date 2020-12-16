import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  :root {
      --blue-500: #042c43;
      --blue-400: #1d4156;
      --blue-300: #365669;
      --blue-200: #4f6b7b;
      --blue-100: #68808e;
      --gold: #e4b04b;
      --gold-dark: #B0893A;
      --dark-grey: #333333;
      --grey: #696969;
      --light-grey: #cccccc;
    }
    body {
        font-family: "Lato", sans-serif;
    }
    h1 {
        font-family: "Lora", serif;
    }
`;
