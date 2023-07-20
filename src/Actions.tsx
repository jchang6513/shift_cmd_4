import { useCallback } from "react";
import Select from "react-select";
import { Option } from "./types";
import { nodeToImage } from "./utils";
import { CODE_EDITOR_ID, LANGUAGES } from "./constants";

const scale = 3;

export const Actions = ({
  language,
  setLanguage
}: {
  language: Option;
  setLanguage: (v: Option) => void;
}) => {
  const download = useCallback(() => {
    const node = document.getElementById(CODE_EDITOR_ID);
    if (!node) return;

    nodeToImage(node, scale)
  }, []);

  return (
    <div className="actions">
      <Select
        className="language-selector"
        value={language}
        onChange={(v) => v && setLanguage(v)}
        options={LANGUAGES}
      />
      <button onClick={download}>Download</button>
    </div>
  );
};
