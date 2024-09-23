import React, { useState } from 'react';
import { Storage } from 'aws-amplify';

function ImageUpload({ onUpload }) {
  const [isUploading, setIsUploading] = useState(false);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setIsUploading(true);
    try {
      const result = await Storage.put(file.name, file, {
        contentType: file.type,
      });
      const url = await Storage.get(result.key);
      const response = await fetch('arn:aws:lambda:us-east-1:058264554045:function:image-function', {
        method: 'POST',
        body: JSON.stringify({ image: url }),
      });
      const detectedIngredients = await response.json();
      onUpload(detectedIngredients);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
    setIsUploading(false);
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        disabled={isUploading}
      />
      {isUploading && <p>Uploading and processing image...</p>}
    </div>
  );
}

export default ImageUpload;