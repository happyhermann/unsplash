import React from "react";
import { createGlobalStyle } from "styled-components";

import Router from "./routes/Router";

// unplash api key

const GlobalStyle = createGlobalStyle`
  
  button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

  }
  a {
    
    text-decoration: none;
    color: inherit;
    
  }
  li {
    list-style: none;
  }
`;
// 전역 스타일 적용

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
