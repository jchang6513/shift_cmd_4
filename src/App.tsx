import { useEffect, useRef } from "react";

import hljs from "highlight.js";
import "./styles.css";
import { Actions } from "./Actions";
import { CodeEditor } from "./CodeEditor";
import { CAPTURE_DOM_ID, DEFAULT_LANGUAGE, DEFAULT_THEME } from "./constants";
import { Option } from "./types";
import { toggleLink } from "./utils";
import { useParams } from "./useParams";

export default function App() {
  const prevTheme = useRef<Option>()
  const { code, setCode, language = DEFAULT_LANGUAGE, setLanguage, theme = DEFAULT_THEME, setTheme } = useParams()

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
      <h1>shift+cmd+4</h1>
      <div className="container">
        <div id={CAPTURE_DOM_ID} className="desktop">
          <CodeEditor
            language={language}
            code={code}
            onCodeChange={setCode}
          />
        </div>
        <Actions
          language={language}
          theme={theme}
          setLanguage={setLanguage}
          setTheme={setTheme}
        />
      </div>
      <div className="footer">
        created by <a href="https://github.com/jchang6513/shift_cmd_4" target="_blank">jchang6513</a>
      </div>
    </div>
  );
}
