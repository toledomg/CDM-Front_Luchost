import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  background-color: var(--color-gray-4);
  font-family: var(--font-primary);
}


:root {
  --font-primary: "Inter", sans-serif;

  --color-primary: #FF577F;
  --color-primary-Focus: #FF427F;
  --color-primary-Negative: #59323F;

  --color-gray-4: #121214;
  --color-gray-3: #212529;  
  --color-gray-2: #343B41;
  --color-gray-1: #868E96;
  --color-gray-0: #F8F9FA;
  

  --color-negative: #e60000;
  --color-warning: #ffcd07;
  --color-sucess: #168821;
  --color-info: #155bcb;
}

.color-negative {
  --color-negative: #e60000;
}
.color-warning {
  --color-warning: #ffcd07;
}
.color-sucess {
  --color-sucess: #168821;
}
.color-info {
  --color-info: #155bcb;
}

div {
  font-family: var(--font-primary);
}

`;

export const Reset = createGlobalStyle`
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
}

button{
  cursor: pointer;
}
`;
