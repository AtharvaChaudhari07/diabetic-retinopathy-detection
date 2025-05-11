# Diabetic Retinopathy Classification using Convolutional Neural Networks (CNN)

This project leverages Convolutional Neural Networks (CNN) to classify diabetic retinopathy in retinal images. The model was trained on a dataset of retinal images to predict the severity of diabetic retinopathy in five categories:

- **No_DR**: No diabetic retinopathy
- **Mild**: Mild diabetic retinopathy
- **Moderate**: Moderate diabetic retinopathy
- **Severe**: Severe diabetic retinopathy
- **Proliferate_DR**: Proliferative diabetic retinopathy

## Project Overview

This project involves:

1. **Data Preprocessing**: Loading, processing, and augmenting retinal images for training.
2. **Model Training**: Building and training a CNN using TensorFlow/Keras.
3. **Web Application**: Creating a FastAPI backend to serve the trained model and React frontend for user interaction. The frontend allows users to upload retinal images and receive predictions.

## Features

- **Model Training**: The model is trained using a CNN architecture for image classification.
- **Web Interface**: A web-based interface where users can upload a retinal image and get predictions about diabetic retinopathy severity.
- **Image Upload**: Users can upload images through a drag-and-drop feature.
- **FastAPI Backend**: The backend uses FastAPI to serve the model predictions.
- **React Frontend**: The frontend is built with React, offering a clean and responsive UI.

## Deployment

### Frontend Deployment:
The frontend is deployed using **Vercel**. You can visit the live website here:  
[Visit the Neural Network Web Application](https://diabetic-retinopathy-detection-one.vercel.app/)

### Backend Deployment:
The backend is deployed using **Render**. It is automatically connected to the frontend, and the API can be accessed via the URL provided by Render.
