import React from "react";
import { TextField } from "@mui/material";

interface SlicesOfBreadFieldProps {
  formik: any;
}

export default function SlicesOfBreadField({
  formik,
}: SlicesOfBreadFieldProps) {
  return (
    <TextField
      label="slices of bread"
      type="number"
      name="slices_of_bread"
      value={formik.values.slices_of_bread}
      onChange={formik.handleChange}
      fullWidth
      inputProps={{
        min: 0,
      }}
      error={
        formik.touched.slices_of_bread && Boolean(formik.errors.slices_of_bread)
      }
      helperText={
        formik.touched.slices_of_bread && formik.errors.slices_of_bread
      }
    />
  );
}
