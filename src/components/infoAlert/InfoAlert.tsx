import { Alert, AlertColor, Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";

export interface InfoAlertProps {
  message: string;
  alertColor: AlertColor;
}

export const InfoAlert = ({
  message,
  alertColor,
}: InfoAlertProps): JSX.Element => {
  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  useEffect(() => {
    if (message) {
      setIsSnackbarOpen(true);
    }
  }, [message]);

  return (
    <Snackbar
      open={isSnackbarOpen}
      autoHideDuration={6000}
      onClose={() => setIsSnackbarOpen(false)}
    >
      <Alert onClose={() => setIsSnackbarOpen(false)} severity={alertColor}>
        {message}
      </Alert>
    </Snackbar>
  );
};
