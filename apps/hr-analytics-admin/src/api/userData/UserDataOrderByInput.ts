import { SortOrder } from "../../util/SortOrder";

export type UserDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  email?: SortOrder;
  telegramId?: SortOrder;
  role?: SortOrder;
  department?: SortOrder;
  location?: SortOrder;
  company?: SortOrder;
  languagePreference?: SortOrder;
  personalProfile?: SortOrder;
};
