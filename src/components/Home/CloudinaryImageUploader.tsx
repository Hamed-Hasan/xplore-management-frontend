import axios from "axios";

const handleCloudinaryImageUpload = async (file: any) => {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "i9lzowb4");

    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/dq9vbbjld/image/upload`,
      formData
    );

    if (response.status === 200) {
      const imageUrl = response.data.secure_url;
      return imageUrl;
    }
  } catch (error) {
    console.error("Error uploading image to Cloudinary", error);
  }
};

export default handleCloudinaryImageUpload;
