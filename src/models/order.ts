import { DishType } from "./dishType";

export interface Order {
  id?: number;
  name?: string;
  preparation_time: string;
  type?: DishType;
  no_of_slices?: number;
  diameter?: number;
  spiciness_scale?: number;
  slices_of_bread?: number;
}
