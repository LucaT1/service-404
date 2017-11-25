import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { Container } from './container'

const Page = () => 
  <Container>
    <h2>404</h2>

    <div style={{ width: 60, height: '100%' }} />

    <span>The URL you requested was not found</span>
  </Container>

export default (req, res) => {
  const sheet = new ServerStyleSheet()

  const html = renderToString(
    sheet.collectStyles(<Page />)
  )

  return res.end(sheet.getStyleTags() + html)
}