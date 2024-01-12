import Resizer from "react-image-file-resizer";

export const resizeFile = (file: File) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        1500,
        1500,
        "WEBP",
        80,
        0,
        (uri) => {
          resolve(uri);
        },
        "file"
      );
    });