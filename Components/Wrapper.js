import React, { Component } from 'react';

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-family: 'Circular Std';
      src: url('/static/CircularStd-Black.otf');
      src: url('/static/CircularStd-BlackItalic.otf');
      src: url('/static/CircularStd-Bold.otf');
      src: url('/static/CircularStd-BoldItalic.otf');
      src: url('/static/CircularStd-Book.otf');
      src: url('/static/CircularStd-BookItalic.otf');
      src: url('/static/CircularStd-Medium.otf');
      src: url('/static/CircularStd-MediumItalic.otf');
  }
  
  
  body {
    background: #282A4A;
    -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-rendering: optimizelegibility;
  }

  h2, h1 {

    font-style: normal;
    font-weight: 500;
    font-size: 38px;
    line-height: 48px;

/* identical to box height */
    text-align: center;

    color: #FFFFFF;
    font-family: 'Circular Std';


}

p {

    font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 181.1%;

/* or 33px */
text-align: center;

color: rgba(255, 255, 255, 0.44);
font-family: 'Circular Std';


}

ul {
    list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

}

li {
  display: block;
  color: white;
  text-align: center;
  padding: 29px;
  text-decoration: none;
}


`





class Wrapper extends Component {
    render() {
        return (
            <div>
                <GlobalStyle/>
            </div>
        );
    }
}

export default Wrapper;