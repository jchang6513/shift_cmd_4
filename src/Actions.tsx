import { useCallback } from "react";
import Select from "react-select";
import { Option } from "./types";
import { nodeToImage } from "./utils";
import { CAPTURE_DOM_ID, COLOR_STYLES, LANGUAGES, THEMES } from "./constants";

const scale = 3;

export const Actions = ({
  language,
  theme,
  setLanguage,
  setTheme,
}: {
  language: Option;
  theme: Option;
  setLanguage: (v: Option) => void;
  setTheme: (v: Option) => void;
}) => {
  const download = useCallback(() => {
    const node = document.getElementById(CAPTURE_DOM_ID);
    if (!node) return;

    nodeToImage(node, scale)
  }, []);

  return (
    <div className="actions">
      <div className="selector-icon">
        <img src="./theme.png" />
      </div>
      <Select
        className="selector theme-selector"
        value={theme}
        onChange={(v) => v && setTheme(v)}
        options={THEMES}
        menuPlacement="top"
        styles={COLOR_STYLES}
      />
      <div className="selector-icon">
        <img src="./programming-language.png" />
      </div>
      <Select
        className="selector language-selector"
        value={language}
        onChange={(v) => v && setLanguage(v)}
        options={LANGUAGES}
        menuPlacement="top"
        styles={COLOR_STYLES}
      />
      <button onClick={download}>Download</button>
    </div>
  );
};
