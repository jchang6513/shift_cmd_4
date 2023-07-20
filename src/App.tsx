import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import "./styles.css";
import { Actions } from "./Actions";
import { CodeEditor } from "./CodeEditor";
import { DEFAULT_CODE, DEFAULT_LANGUAGE } from "./constants";
import { Option } from "./types";

export default function App() {
  const [language, setLanguage] = useState<Option>(DEFAULT_LANGUAGE);
  const [code, setCode] = useState(DEFAULT_CODE);

  useEffect(() => {
    hljs.highlightAll();
  }, [language, code]);

  return (
    <div className="App">
      <div className="container">
        <Actions language={language} setLanguage={setLanguage} />
        <CodeEditor
          language={language}
          code={code}
          onCodeChange={setCode}
        />
      </div>
    </div>
  );
}
