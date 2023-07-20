import { Option } from "./types";

type Props = {
  language: Option;
  code: string;
  onCodeChange: (s: string) => void;
}

export const CodeEditor = (props: Props) => {
  const { language, code, onCodeChange } = props;

  return (
    <div className="code-editor">
      <span className="control close"></span>
      <span className="control min"></span>
      <span className="control max"></span>
      <pre>
        <code className={`code-text language-${language.value}`}>
          {code}
        </code>
        <textarea
          className="code-text"
          value={code}
          onChange={e => onCodeChange(e.currentTarget.value)}
        />
      </pre>
    </div>
  );
};
