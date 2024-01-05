'use client'

import React, { useState } from 'react'
import { Topic } from '@/types/Topic'
import { postPdf } from '@/services/postPdf'
import TopicRetrieve from './TopicRetrieve'

export function UploadTopic () {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [uploadedTopic, setUploadedTopic] = useState<Topic | null>(null)

  const handleFileChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      setSelectedFile(files[0])
    }
  }

  const handleUpload = async () => {
    if (!selectedFile) return
    postPdf(selectedFile)
      .then((topic) => {
        setUploadedTopic(topic)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <>
    <div className="flex gap-4 items-center justify-between">
      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="file-input file-input-bordered file-input-info w-full max-w-xs file-input-sm"
        />
      <button
        onClick={handleUpload}
        className={`${'btn btn-info btn-sm'} ${selectedFile ? '' : 'btn-disabled'}`}
        >
        subir archivo
      </button>
    </div>
    {uploadedTopic && <TopicRetrieve topic={uploadedTopic}/>}
  </>
  )
};

export default UploadTopic
