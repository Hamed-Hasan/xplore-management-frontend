import axios from "axios";

const pollForImageAvailability = async (
  imageURL: string,
  maxAttempts = 10,
  delay = 1000
) => {
  let attempts = 0;
  while (attempts < maxAttempts) {
    try {
      // Make a request to the Cloudinary URL to check if the image is available
      const response = await axios.get(imageURL);

      if (response.status === 200) {
        // The image is available, exit the loop
        return;
      }
    } catch (error) {
      // Image not available yet, wait for a while
      await new Promise((resolve) => setTimeout(resolve, delay));
      attempts++;
    }
  }

  throw new Error("Image not available on Cloudinary after polling");
};

export default pollForImageAvailability;
