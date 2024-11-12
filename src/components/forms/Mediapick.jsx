import React, { useState } from 'react';

const Mediapick = () => {
  const [files, setFiles] = useState([]);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFiles = event.target.files;
    setFiles((prevFiles) => [...prevFiles, ...Array.from(selectedFiles)]);
  };

  // Handle file removal
  const handleFileRemove = (fileToRemove) => {
    setFiles(files.filter(file => file !== fileToRemove));
  };

  return (
    <div className="media-pick">
      <h3>Upload Files</h3>

      {/* File input for picking multiple files */}
      <input 
        type="file" 
        multiple 
        onChange={handleFileChange} 
        className="form-control" 
      />

      {/* Display selected files */}
      <div className="file-preview">
        <h4>Selected Files:</h4>
        {files.length > 0 ? (
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                <span>{file.name}</span>
                <button onClick={() => handleFileRemove(file)} className="btn btn-danger btn-sm">
                  Remove
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No files selected.</p>
        )}
      </div>
      
      {/* Optionally, you can add functionality for uploading the files to a server */}
      <button onClick={() => alert('Files submitted!')} className="btn btn-primary">
        Submit Files
      </button>
    </div>
  );
};

export default Mediapick;
