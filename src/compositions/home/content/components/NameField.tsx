import React from "react";
import { TextField } from "@mui/material";

interface NameFieldProps {
  formik: any;
}

export default function NameField({ formik }: NameFieldProps) {
  return (
    <TextField
      name="name"
      label={"name"}
      value={formik.values.name}
      onChange={formik.handleChange}
      error={formik.touched.name && Boolean(formik.errors.name)}
      helperText={formik.touched.name && formik.errors.name}
      variant="outlined"
      fullWidth
    />
  );
}
