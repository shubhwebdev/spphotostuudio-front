
import React, { useState } from 'react';

const ImageUploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('name', name);

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append('images', selectedFiles[i]);
      }

      const response = await fetch('https://spstudio.onrender.com/uploads', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const savedImages = await response.json();
        console.log(savedImages); // Do something with the saved images
      } else {
        throw new Error('Failed to upload images');
      }
    } catch (error) {
      console.error(error);
      // Handle error state
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Category:
          <input type="text" value={category} onChange={handleCategoryChange} />
        </label>
      </div>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Select Images:
          <input type="file" multiple onChange={handleFileChange} />
        </label>
      </div>
      <div>
        <button type="submit">Upload</button>
      </div>
    </form>
  );
};

export default ImageUploader;
