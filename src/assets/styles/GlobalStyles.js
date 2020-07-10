import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

    html, .root {
  font-size: 16px;
  line-height: 29px;
}
body {
  font-family: Montserrat;
  font-size: 16px;
  line-height: 29px;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colorPrimary};
  color: ${({theme}) => theme.colorFontPrimary}
}
h1, .h1 {
  font-size: 90px;
  line-height: 116px;
  margin-top: 29px;
  margin-bottom: 58px;
}
h2, .h2 {
  font-size: 51px;
  line-height: 58px;
  margin-top: 29px;
  margin-bottom: 29px;
}
h3, .h3 {
  font-size: 28px;
  line-height: 29px;
  margin-top: 29px;
  margin-bottom: 0px;
}
h4, .h4 {
  font-size: 16px;
  line-height: 29px;
  margin-top: 29px;
  margin-bottom: 0px;
}
h5, .h5 {
  font-size: 16px;
  line-height: 29px;
  margin-top: 29px;
  margin-bottom: 0px;
}
p, ul, ol, pre, table, blockquote {
  margin-top: 0px;
  margin-bottom: 29px;
}
ul ul, ol ol, ul ol, ol ul {
  margin-top: 0px;
  margin-bottom: 0px;
}

/* Let's make sure all's aligned */
hr, .hr {
  border: 1px solid;
  margin: -1px 0;
}
a, b, i, strong, em, small, code {
  line-height: 0;
}
sub, sup {
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sup {
  top: -0.5em;
}
sub {
  bottom: -0.25em;
}
`

export default GlobalStyle