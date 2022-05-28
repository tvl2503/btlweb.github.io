import axios from "axios";
import { BASE_URL } from "../constants/request";
import { AxiosConfigParams } from "../models/PropsObject";

export const http = axios.create({
  url: BASE_URL
})

const request = async (props: AxiosConfigParams) => {
  try {
    const response = await axios({
      url: props.url,
      method: props.method || "GET",
      headers: {
        ...props.headers,
        Authorization: "Bearer " + props?.token,
      },
      params: props.params
        ? {
            ...props.params,
          }
        : undefined,
      data: props.body
        ? {
            ...props.body,
          }
        : undefined,
    });
    return response;
  } catch (err: any) {
    return err;
  }
};

export default request;
