import React from 'react';
import { TextField } from '@mui/material';

export default function FileUploader({ label, accept }) {
  const handleFileChange = (e) => {
    const files = e.target.files;
    // Log the selected files or handle them as necessary
    console.log(files);
  };

  return (
    <TextField
      fullWidth
      margin="normal"
      type="file"
      label={label}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{ accept: accept }}  // Limit file type
      onChange={handleFileChange}
    />
  );
}
