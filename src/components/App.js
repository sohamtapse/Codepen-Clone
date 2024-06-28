import React, {useState , useEffect}from "react";
import Editor from "./Editor"
import UseLocalStorage from "./UseLocalStorage";
function App() {
  const [html, sethtml] = UseLocalStorage('html','')
  const [css, setcss] = UseLocalStorage('css','')
  const [javascript, setjavascript] = UseLocalStorage('javascript','')
  const [srcDoc, setsrcDoc] = useState('')

  useEffect(()=>{
    const timeout = setTimeout(() =>{
      setsrcDoc(
        `
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${javascript}</script>
        </html>
        `
      )
    },250)
    return () => clearTimeout(timeout)
  }, [html,javascript,css])


  return (
    <>
    <div className="pane top-pane">
      <Editor 
        language="xml" 
        displayName="HTML" 
        value={html} 
        onchange={sethtml} 
      />
      <Editor
        language="css" 
        displayName="CSS" 
        value={css} 
        onchange={setcss} 
      />
      <Editor
        language="javascript" 
        displayName="Javascript" 
        value={javascript} 
        onchange={setjavascript} 
      />
    </div>

    <div className="pane">
      <iframe
        srcDoc={srcDoc}
        title="output"
        frameBorder="0"
        sandbox="allow-scripts"
        width="100%"
        height="100%"
      />
    </div>
    </>
  )
}

export default App;
