import Tesseract from 'tesseract.js';

export const recognizeText = async (imagePath) => {
  try {
    const result = await Tesseract.recognize(
      imagePath,
      'eng',
      {
        logger: m => console.log(m), // optional: logs progress
      }
    );
    return result.data.text;
  } catch (error) {
    console.error('OCR failed:', error);
    return '';
  }
};
