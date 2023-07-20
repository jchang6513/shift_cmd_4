import domtoimage from "dom-to-image";

export const nodeToImage = (node: HTMLElement, scale: number) => {
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
}
