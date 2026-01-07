import { Cloudinary } from "@cloudinary/url-gen";

const cloudName = process.env.REACT_APP_CLOUD_NAME; 
const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET; 

export const cld = new Cloudinary({
  cloud: {
    cloudName: cloudName
  }
});

export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  try {
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: formData,
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error.message || "Upload failed");
    }

    const data = await response.json();
    
    return data; 
  } catch (error) {
    console.error("Cloudinary Upload Error:", error);
    throw error;
  }
};