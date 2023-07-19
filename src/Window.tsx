type Props = {
  language: string;
  code: string;
  onCodeChange: (s: string) => void;
}

export const Window = (props: Props) => {
  const { language, code, onCodeChange } = props;

  return (
    <div id="code-eidtor" className="code-editor">
      <span className="control close"></span>
      <span className="control min"></span>
      <span className="control max"></span>
      <pre>
        <code className={`code-text language-${language.toLowerCase()}`}>
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
