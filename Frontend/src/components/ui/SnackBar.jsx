import React, { useState } from 'react';
import { Alert, Snackbar } from '@mui/material';

export default function SnackBar() {
  // Local state to control Snackbar
  const [open, setOpen] = useState(true);
  const vertical = 'top'; // Static position for demonstration
  const horizontal = 'center'; // Static position for demonstration
  const message = 'This is a sample snackbar message';
  const severity = 'success'; // Can be 'success', 'error', 'info', or 'warning'

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
}
