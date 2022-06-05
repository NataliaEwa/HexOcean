import { useFormik } from "formik";
import { formatTime } from "../../../utilities/formatDate";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";
import { Form } from "./OrderForm.styles";
import { validationSchema } from "./ValidationSchema";
import { DishType } from "../../../models/dishType";
import NameForm from "./components/NameField";
import PreparationTimeForm from "./components/PreparationTimeField";
import DishTypeForm from "./components/DishTypeField";
import NoOfSlicesForm from "./components/NoOfSlicesField";
import DiameterForm from "./components/DiameterField";
import SpicinessScaleForm from "./components/SpicinessScaleField";
import SlicesOfBreadForm from "./components/SlicesOfBreadField";
import axios from "axios";
import { orderApiCall } from "../../../services/orderApiCall";
import { Order } from "../../../models/order";
import {
  InfoAlert,
  InfoAlertProps,
} from "../../../components/infoAlert/InfoAlert";

export const OrderForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [infoAlertProps, setInfoAlertProps] = useState<InfoAlertProps>();

  const formik = useFormik({
    initialValues: {
      preparation_time: formatTime(Date()),
      name: "",
      diameter: 30,
      type: DishType.Pizza,
      no_of_slices: 6,
      slices_of_bread: 1,
      spiciness_scale: 1,
    },

    validationSchema: validationSchema,
    onSubmit: (values: Order) => {
      setIsLoading(true);

      orderApiCall(values)
        .then((createdOrder) =>
          setInfoAlertProps({
            alertColor: "success",
            message: `Order no ${createdOrder.id} was created`,
          })
        )
        .catch(() =>
          setInfoAlertProps({
            alertColor: "error",
            message: "Something went wrong, please try again",
          })
        )
        .finally(() => setIsLoading(false));
    },
  });

  return (
    <>
      <InfoAlert {...infoAlertProps} />

      <Form onSubmit={formik.handleSubmit}>
        <NameForm formik={formik} />

        <PreparationTimeForm formik={formik} />

        <DishTypeForm formik={formik} />

        {formik.values.type == DishType.Pizza && (
          <>
            <NoOfSlicesForm formik={formik} />
            <DiameterForm formik={formik} />
          </>
        )}

        {formik.values.type == DishType.Soup && (
          <SpicinessScaleForm formik={formik} />
        )}

        {formik.values.type == DishType.Sandwich && (
          <SlicesOfBreadForm formik={formik} />
        )}

        <LoadingButton loading={isLoading} variant="contained" type="submit">
          Submit
        </LoadingButton>
      </Form>
    </>
  );
};
