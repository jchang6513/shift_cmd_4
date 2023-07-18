import { useCallback } from "react";
import domtoimage from "dom-to-image";

const scale = 3;

export const Actions = ({
  language,
  setLanguage
}: {
  language: string;
  setLanguage: (s: string) => void;
}) => {
  const download = useCallback(() => {
    const node = document.getElementById("code-eidtor");
    if (!node) return;

    domtoimage
      .toPng(node, {
        quality: 1,
        cacheBust: true,
        width: node.clientWidth * scale,
        height: node.clientHeight * scale,
        style: {
          transform: "scale(" + scale + ")",
          transformOrigin: "top left"
        }
      })
      .then((dataUrl) => {
        // Create a temporary anchor element to initiate download
        const downloadLink = document.createElement("a");
        downloadLink.href = dataUrl;
        downloadLink.download = "captured_image.png";

        // Programmatically trigger the download
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // Clean up the temporary anchor element
        document.body.removeChild(downloadLink);
      })
      .catch((error) => {
        console.error("Error capturing the image:", error);
      });
  }, []);

  return (
    <div className="actions">
      <select
        value={language}
        onChange={(e) => setLanguage(e.currentTarget.value)}
      >
        <option disabled>Select Language</option>
        <option>Python</option>
        <option>Javascript</option>
        <option>Typescript</option>
        <option>Parrot</option>
        <option>Spider</option>
        <option>Goldfish</option>
      </select>
      <button onClick={download}>Download</button>
    </div>
  );
};
