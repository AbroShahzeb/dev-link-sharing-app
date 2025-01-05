export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file); // Reads the file as a Base64-encoded string
    reader.onload = () => resolve(reader.result); // Resolves with Base64 string
    reader.onerror = (error) => reject(error); // Rejects on error
  });
};
