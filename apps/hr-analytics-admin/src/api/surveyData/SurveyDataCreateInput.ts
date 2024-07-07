import { InputJsonValue } from "../../types";

export type SurveyDataCreateInput = {
  surveyId?: string | null;
  surveyTitle?: string | null;
  surveyDescription?: string | null;
  targetAudience?: InputJsonValue;
  surveyPeriod?: Date | null;
  questions?: InputJsonValue;
  answers?: InputJsonValue;
};
