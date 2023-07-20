import { useEffect, useRef, useState } from "react";

import hljs from "highlight.js";
import "./styles.css";
import { Actions } from "./Actions";
import { CodeEditor } from "./CodeEditor";
import { CAPTURE_DOM_ID, DEFAULT_CODE, DEFAULT_LANGUAGE, DEFAULT_THEME } from "./constants";
import { Option } from "./types";
import { toggleLink } from "./utils";

export default function App() {
  const [language, setLanguage] = useState<Option>(DEFAULT_LANGUAGE);
  const [theme, setTheme] = useState<Option>(DEFAULT_THEME);
  const prevTheme = useRef<Option>()
  const [code, setCode] = useState(DEFAULT_CODE);

  useEffect(() => {
    if (theme.value !== prevTheme.current?.value) {
      toggleLink(theme.value, true)
      setTimeout(() => {
        if (theme.value !== prevTheme.current?.value && !!prevTheme.current) {
          toggleLink(prevTheme.current.value, false)
        }

        prevTheme.current = theme
      }, 500)
    }
  }, [theme])

  useEffect(() => {
    hljs.highlightAll();
  }, [language, code]);

  return (
    <div className="App">
      <div className="container">
        <h1>shift+cmd+4</h1>
        <Actions
          language={language}
          theme={theme}
          setLanguage={setLanguage}
          setTheme={setTheme}
        />
        <div id={CAPTURE_DOM_ID} className="desktop">
          <CodeEditor
            language={language}
            code={code}
            onCodeChange={setCode}
          />
        </div>
      </div>
    </div>
  );
}
