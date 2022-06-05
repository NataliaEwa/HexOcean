import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import { DishType } from "../../../../models/dishType";

interface DishTypeFieldProps {
  formik: any;
}

export default function DishTypeField({ formik }: DishTypeFieldProps) {
  return (
    <Autocomplete
      options={[DishType.Pizza, DishType.Soup, DishType.Sandwich]}
      fullWidth
      value={formik.values.type}
      onChange={(_, value) => formik.setFieldValue("type", value)}
      renderInput={(params) => (
        <TextField
          error={formik.touched.type && Boolean(formik.errors.type)}
          helperText={formik.touched.type && formik.errors.type}
          label="dish type"
          {...params}
        />
      )}
    />
  );
}
