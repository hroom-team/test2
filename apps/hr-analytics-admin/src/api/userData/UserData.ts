import { JsonValue } from "type-fest";

export type UserData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string | null;
  email: string | null;
  telegramId: string | null;
  role: string | null;
  department: string | null;
  location: string | null;
  company: string | null;
  languagePreference: string | null;
  personalProfile: JsonValue;
};
