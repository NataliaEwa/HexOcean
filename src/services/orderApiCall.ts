import { Order } from "../models/order";
import api from "./api";

export const orderApiCall = (order: Order): Promise<Order> => {
  return api.post("dishes", order).then((response) => response.data);
};
