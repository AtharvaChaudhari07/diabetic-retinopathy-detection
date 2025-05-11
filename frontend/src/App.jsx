import React, { useState, useCallback } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [imagePreview, setImagePreview] = useState(null); // State for image preview

  const onDrop = useCallback((acceptedFiles) => {
    const uploadedFile = acceptedFiles[0];
    setFile(uploadedFile);
    const previewUrl = URL.createObjectURL(uploadedFile); // Create object URL for preview
    setImagePreview(previewUrl); // Set image preview state
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*", // Accept all image files
    multiple: false,
  });

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post("http://localhost:8000/predict", formData);
      setPrediction(res.data.prediction);
    } catch (err) {
      console.error("Prediction error", err);
    }
  };

  return (
    <div className="container">
      <h2>Diabetic Retinopathy Detection</h2>

      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag and drop an image, or click to select one (PNG/JPG/JPEG/WEBP allowed)</p>
        )}
      </div>

      {imagePreview && (
        <div className="image-preview">
          <img
            src={imagePreview}
            alt="Uploaded Preview"
            style={{ width: "300px", height: "auto", borderRadius: "10px" }}
          />
        </div>
      )}

      {file && <p><strong>Selected file:</strong> {file.name}</p>}

      <button onClick={handleUpload}>Predict</button>

      {prediction && <div className="prediction">Prediction: {prediction}</div>}
      <div className="footer">Made with using React + FastAPI + TensorFlow</div>
    </div>
  );
}

export default App;
