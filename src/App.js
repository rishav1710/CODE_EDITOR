import Editor from './components/Editor/Editor';
import React from 'react';
import './index.css';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [src, setSrc] = React.useState('');

  const [html, setHtml] = useLocalStorage('html', '');
  const handleHtml = (data) => {
    setHtml(data);
  };
  const [css, setCss] = useLocalStorage('css', '');
  const handleCss = (data) => {
    setCss(data);
  };
  const [js, setJs] = useLocalStorage('js', '');
  const handleJs = (data) => {
    setJs(data);
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(`<html>
      <style>${css}</style>
      <body>${html}</body>
      <script>${js}</script>
      </html`);
    }, 250);

    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <>
      <div className="top-div">
        <Editor
          displayName={'HTML'}
          value={html}
          onChange={handleHtml}
          language="xml"
        />
        <Editor
          displayName={'CSS'}
          value={css}
          onChange={handleCss}
          language="css"
        />
        <Editor
          displayName={'JavaScript'}
          value={js}
          onChange={handleJs}
          language="javascript"
        />
      </div>
      <div className="bottom-div">
        <iframe
          srcDoc={src}
          title="output"
          height={'100%'}
          width={'100%'}
          sandbox="allow-scripts"
        />
      </div>
    </>
  );
}

export default App;
