import React from "react";
import { TextField } from "@mui/material";

interface PreparationTimeFieldProps {
  formik: any;
}

export default function PreparationTimeField({
  formik,
}: PreparationTimeFieldProps) {
  return (
    <TextField
      label="preparation time"
      type="time"
      name="preparation_time"
      value={formik.values.preparation_time}
      onChange={formik.handleChange}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 1,
      }}
      fullWidth
    />
  );
}
