import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type UserDataWhereInput = {
  id?: StringFilter;
  userId?: StringNullableFilter;
  email?: StringNullableFilter;
  telegramId?: StringNullableFilter;
  role?: StringNullableFilter;
  department?: StringNullableFilter;
  location?: StringNullableFilter;
  company?: StringNullableFilter;
  languagePreference?: StringNullableFilter;
  personalProfile?: JsonFilter;
};
