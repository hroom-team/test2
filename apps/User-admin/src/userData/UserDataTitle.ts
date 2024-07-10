import { UserData as TUserData } from "../api/userData/UserData";

export const USERDATA_TITLE_FIELD = "userId";

export const UserDataTitle = (record: TUserData): string => {
  return record.userId?.toString() || String(record.id);
};
