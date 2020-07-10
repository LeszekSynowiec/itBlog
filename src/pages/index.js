import React from "react"
import { Link } from "gatsby"
import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from "../assets/styles/GlobalStyles"
import { theme } from "../assets/styles/theme"

import Instagram from "../assets/icons/instagram.inline.svg"
import Twitter from '../assets/icons/twitter.inline.svg'
import Articles from '../assets/icons/articles.inline.svg'

const MainWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  h1 {
    padding-top: 140px;
    font-size: 120px;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  padding-top: 50px;
  width: 370px;
  justify-content: space-between;
`

const IndexPage = () => (
  <div>
    <ThemeProvider theme={theme}>
      <MainWrapper>
        <GlobalStyle />
        <h1>iT Blog.</h1>
        <LinkWrapper>
          <Articles />
          <Instagram />
          <Twitter />
        </LinkWrapper>
      </MainWrapper>
    </ThemeProvider>
  </div>
)

export default IndexPage
