import { UserDataWhereInput } from "./UserDataWhereInput";
import { UserDataOrderByInput } from "./UserDataOrderByInput";

export type UserDataFindManyArgs = {
  where?: UserDataWhereInput;
  orderBy?: Array<UserDataOrderByInput>;
  skip?: number;
  take?: number;
};
