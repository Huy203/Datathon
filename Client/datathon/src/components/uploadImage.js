import React, { useState, useEffect } from "react";
import axios from "axios";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  // useEffect(() => {
  //   fetch("http://localhost:8000/NCTN/csrf-token")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCsrfToken(data.csrfToken);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("image", selectedImage);

    try {
      await axios.post("http://localhost:8000/NCTN/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default ImageUploader;
