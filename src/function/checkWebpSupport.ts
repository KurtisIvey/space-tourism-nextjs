export default function checkWebpSupport() {
  if (typeof document === "undefined") {
    // WebP support cannot be determined on the server-side rendering
    return false;
  }

  const elem = document.createElement("canvas");
  if (elem.getContext && elem.getContext("2d")) {
    const webpData = elem.toDataURL("image/webp");
    return webpData.indexOf("data:image/webp") === 0;
  }

  return false;
}
