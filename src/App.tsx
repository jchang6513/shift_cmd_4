import { useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark-dimmed.css";
import "./styles.css";
import { Actions } from "./Actions";
import { Window } from "./Window";
import { DEFAULT_CODE } from "./constants";

export default function App() {
  const [language, setLanguage] = useState<string>("py");
  const [code, setCode] = useState(DEFAULT_CODE);

  useEffect(() => {
    hljs.highlightAll();
  }, [language, code]);

  return (
    <div className="App">
      <div className="container">
        <Actions language={language} setLanguage={setLanguage} />
        <Window
          language={language}
          code={code}
          onCodeChange={setCode}
        />
      </div>
    </div>
  );
}
