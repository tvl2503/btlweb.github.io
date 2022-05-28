export const convertImageToURL = (file: File) => {
  return URL.createObjectURL(file);
};
