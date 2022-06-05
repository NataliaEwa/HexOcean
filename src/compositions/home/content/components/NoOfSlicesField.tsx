import React from "react";
import { TextField } from "@mui/material";

interface NoOfSlicesFieldProps {
  formik: any;
}

export default function NoOfSlicesField({ formik }: NoOfSlicesFieldProps) {
  return (
    <TextField
      label="no of slices"
      type="number"
      name="no_of_slices"
      value={formik.values.no_of_slices}
      onChange={formik.handleChange}
      fullWidth
      inputProps={{
        min: 0,
      }}
      error={formik.touched.no_of_slices && Boolean(formik.errors.no_of_slices)}
      helperText={formik.touched.no_of_slices && formik.errors.no_of_slices}
    />
  );
}
