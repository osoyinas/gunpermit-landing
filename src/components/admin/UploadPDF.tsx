'use client'

import React, { useState } from 'react'
import axios from 'axios'
export function UploadPDF () {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)

  const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    const formData = new FormData()
    formData.append('file', selectedFile)
    try {
      await axios.post('http://127.0.0.1:8000/api/pdfs/', formData)
    } catch (error) {
      console.error('Error al subir el archivo', error)
    }
  }

  return (
    <div className="flex gap-4 items-center justify-between">

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className=" border-gray-300"
      />
      <button
        onClick={handleUpload}
        className={`${'btn btn-primary btn-xs'} ${selectedFile ? '' : 'btn-disabled'}`}
      >
        subir archivo
      </button>
    </div>
  )
};

export default UploadPDF
