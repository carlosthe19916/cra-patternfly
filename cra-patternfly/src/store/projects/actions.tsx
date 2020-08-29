import { AxiosError, AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { createAsyncAction } from "typesafe-actions";
import { Model1 } from "api/models";
import { getModels } from "api/rest";

export const {
  request: fetchProjectListRequest,
  success: fetchProjectListSuccess,
  failure: fetchProjectListFailure,
} = createAsyncAction(
  "projectList/fetch/request",
  "projectList/fetch/success",
  "projectList/fetch/failure"
)<void, Model1[], AxiosError>();

export const fetchProjects = () => {
  return (dispatch: Dispatch) => {
    dispatch(fetchProjectListRequest());

    return getModels()
      .then((res: AxiosResponse) => {
        dispatch(fetchProjectListSuccess(res.data));
      })
      .catch((err: AxiosError) => {
        dispatch(fetchProjectListFailure(err));
      });
  };
};
