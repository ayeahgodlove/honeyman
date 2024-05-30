import { IUser, IUserResponse, IUserResponses } from "@model/user.model";
import { requestType } from "./.";

export const userService = {
  list: (): Promise<IUserResponses> => requestType.get("/api/users"),
  details: (code: string): Promise<IUserResponse> =>
    requestType.get(`/api/users/${code}`),
  create: (user: IUser): Promise<IUserResponse> =>
  requestType.post(`/api/users`, user),
  update: (user: IUser): Promise<IUserResponse> =>
    requestType.put(`/api/users`, user),
  delete: (user: IUser): Promise<IUserResponse> =>
    requestType.del(`/api/users`, user),
};
