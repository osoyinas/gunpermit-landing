'use client'

import React, { useState } from 'react';
import axios from 'axios';
export function UploadPDF() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0){
      setSelectedFile(files[0]);
    }
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile as File);

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/pdfs/', formData);
      console.log(response.data);
    } catch (error) {
      console.error('Error al subir el archivo', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <input 
        type="file" 
        accept="application/pdf" 
        onChange={handleFileChange} 
        className="my-4 p-2 border border-gray-300 rounded-md"
      />
      <br />
      <button 
        onClick={handleUpload} 
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Subir
      </button>
    </div>
  );
};

export default UploadPDF;