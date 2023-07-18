import { forwardRef } from "react";

export const Window = forwardRef<
  HTMLElement,
  {
    language: string;
    code: string;
    handleCodeChange: () => void;
  }
>((props, codeRef) => {
  const { language, code, handleCodeChange } = props;
  return (
    <div id="code-eidtor" className="code-editor">
      <span className="control close"></span>
      <span className="control min"></span>
      <span className="control max"></span>
      <pre>
        <code
          ref={codeRef}
          className={`language-${language.toLowerCase()}`}
          contentEditable="true"
          onInput={handleCodeChange}
        >
          {code}
        </code>
      </pre>
    </div>
  );
});
