import React from "react";
import { TextField } from "@mui/material";

interface DiameterFieldProps {
  formik: any;
}

export default function DiameterField({ formik }: DiameterFieldProps) {
  return (
    <TextField
      label="diameter"
      type="number"
      name="diameter"
      value={formik.values.diameter}
      onChange={formik.handleChange}
      fullWidth
      inputProps={{
        step: 0.1,
        min: 0,
      }}
      error={formik.touched.diameter && Boolean(formik.errors.diameter)}
      helperText={formik.touched.diameter && formik.errors.diameter}
    />
  );
}
