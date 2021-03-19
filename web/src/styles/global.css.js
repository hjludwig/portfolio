import { createGlobalStyle } from "styled-components";
import "@fontsource/crimson-text/600.css";
import "@fontsource/crimson-text/600-italic.css";

// 1. Base size and ratio
const base = 1.125; //= 18px
const ratio = 1.5; // Perfect Fifth

// 2. The formula for modular scale is (ratio^value)*base so we need a power function
const pow = (number, exponent) => {
  let value = 1;
  if (exponent > 0) {
    for (let i = 1; i <= exponent; i++) {
      value = value * number;
    }
  }
  return value;
};

// 3. Let's make it simpler to use by combining everything under one roof
const ms = (value, msRatio = ratio, msBase = base) => {
  const size = pow(msRatio, value) * msBase;
  return `${size}em`;
};

export const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* font-size: 10px; */
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
        font-size: ${ms(0)};
        line-height: 1.5;
    }
    p {
      margin-bottom: 1em;
    }
    h1, h2, h3, h4 {
      font-family: "Crimson Text", serif;
      line-height: 1;
      margin-top: 4rem;
      margin-bottom: 1rem;
      font-weight: 600;
      letter-spacing: -0.05em;
    }
    h1 {
      font-size: ${ms(4)};
    }
    h2 {
        font-size: ${ms(3)};
    }
    h3 {
      font-size: ${ms(2)}
    }
    h4 {
      font-size: ${ms(1)}
    }
    
`;
