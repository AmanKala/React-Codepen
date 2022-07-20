import React, { useState, useEffect } from 'react';
import useLocalStorage from '../customHooks/useLocalStorage'
import Editor from './Editor'

const App = () => {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [javascript, setJavascript] = useLocalStorage('js', '')

  const [generatedCode, setGeneratedCode] = useState('')

  // To ensure that after 300 ms the output is generated.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setGeneratedCode(
        `<html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>`
      )
    }, 300)

    // To clear the timeout while typing.
    return () => clearTimeout(timeout)
  }, [html, css, javascript])

  return (
    <>
      <div className="division top-division">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JS"
          language="javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
      <div className="division">
        <iframe
          srcDoc={generatedCode}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  )
}

export default App;
