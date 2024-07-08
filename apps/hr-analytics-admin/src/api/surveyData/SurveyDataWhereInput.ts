import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SurveyDataWhereInput = {
  id?: StringFilter;
  surveyId?: StringNullableFilter;
  surveyTitle?: StringNullableFilter;
  surveyDescription?: StringNullableFilter;
  targetAudience?: JsonFilter;
  surveyPeriod?: DateTimeNullableFilter;
  questions?: JsonFilter;
  answers?: JsonFilter;
};
