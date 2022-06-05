import * as yup from "yup";
import { DishType } from "../../../models/dishType";

export const validationSchema = yup.object({
  name: yup.string().required("Dish name required"),
  type: yup.string().required("Dish type required"),
  no_of_slices: yup
    .number()
    .when(["type"], (type, schema) =>
      type == DishType.Pizza
        ? schema.required("Number of slices required")
        : schema
    ),
  diameter: yup
    .number()
    .when(["type"], (type, schema) =>
      type == DishType.Pizza ? schema.required("Diameter required") : schema
    ),
  spiciness_scale: yup
    .number()
    .when(["type"], (type, schema) =>
      type == DishType.Soup
        ? schema
            .max(10, "Maximum scale is 10")
            .min(1, "Minimum scale is 1")
            .required("Spiciness scale is required")
        : schema
    ),

  slices_of_bread: yup
    .number()
    .when(["type"], (type, schema) =>
      type == DishType.Sandwich
        ? schema.required("Number of slices required")
        : schema
    ),
});
