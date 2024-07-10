import { JsonValue } from "type-fest";

export type SurveyData = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  surveyId: string | null;
  surveyTitle: string | null;
  surveyDescription: string | null;
  targetAudience: JsonValue;
  surveyPeriod: Date | null;
  questions: JsonValue;
  answers: JsonValue;
};
