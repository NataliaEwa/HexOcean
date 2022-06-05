import React from "react";
import { TextField } from "@mui/material";

interface SpicinessScaleFieldProps {
  formik: any;
}

export default function SpicinessScaleField({
  formik,
}: SpicinessScaleFieldProps) {
  return (
    <TextField
      label="spiciness scale"
      type="number"
      name="spiciness_scale"
      value={formik.values.spiciness_scale}
      onChange={formik.handleChange}
      fullWidth
      inputProps={{
        min: 0,
        max: 10,
      }}
      error={
        formik.touched.spiciness_scale && Boolean(formik.errors.spiciness_scale)
      }
      helperText={
        formik.touched.spiciness_scale && formik.errors.spiciness_scale
      }
    />
  );
}
