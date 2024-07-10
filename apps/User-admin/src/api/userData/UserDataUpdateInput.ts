import { InputJsonValue } from "../../types";

export type UserDataUpdateInput = {
  userId?: string | null;
  email?: string | null;
  telegramId?: string | null;
  role?: string | null;
  department?: string | null;
  location?: string | null;
  company?: string | null;
  languagePreference?: string | null;
  personalProfile?: InputJsonValue;
};
