import { AxiosPromise } from "axios";
import { APIClient } from "axios-config";
import { Model1 } from "./models";

export const getModels = (): AxiosPromise<Model1[]> => {
  return APIClient.get<Model1[]>("/models/list");
};
