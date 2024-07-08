import { SortOrder } from "../../util/SortOrder";

export type SurveyDataOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  surveyId?: SortOrder;
  surveyTitle?: SortOrder;
  surveyDescription?: SortOrder;
  targetAudience?: SortOrder;
  surveyPeriod?: SortOrder;
  questions?: SortOrder;
  answers?: SortOrder;
};
