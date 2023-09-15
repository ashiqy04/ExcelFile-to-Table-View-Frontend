import React, { useState } from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
import {useNavigate } from 'react-router-dom';


export default function Upload() {

    const navigate = useNavigate();

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleFileUpload = async ()  => {
        const formData = new FormData();
        formData.append('file', selectedFile);

        
        try {
        await axios.post("http://localhost:8080/api/upload", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            },
        });
        console.log("uploaded");
    } catch (error) {
        console.error("Error uploading file:", error);
    }
    navigate("/view")
    }

    return (
        <div className='container'>
        <h1>Excel to Json Convert</h1>
            <input type="file" onChange={handleFileChange} />
            <Button onClick={handleFileUpload} variant="outlined">Upload
            </Button>
        </div>
    );
}


