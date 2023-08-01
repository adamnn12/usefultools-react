import React, { useState } from 'react';
import { Button, TextField, Paper, Grid } from '@mui/material';

const FileConverter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [convertedContent, setConvertedContent] = useState<string>('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFile(files[0]);
    }
  };

  const handleConvert = () => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target?.result as string;
        setConvertedContent(content.toUpperCase());
      };
      reader.readAsText(file);
    }
  };

  return (
    <Paper style={{ padding: '16px' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            type="file"
            variant="outlined"
            fullWidth
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleConvert}>
            Convert
          </Button>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Converted Content"
            variant="outlined"
            value={convertedContent}
            multiline
            rows={4}
            disabled
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default FileConverter;
