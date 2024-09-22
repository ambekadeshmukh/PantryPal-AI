import React from 'react';

function ImageUpload({ onUpload }) {
  return (
    <input
      type="file"
      accept="image/*"
      onChange={() => onUpload(["Detected ingredient 1", "Detected ingredient 2"])}
    />
  );
}

export default ImageUpload;