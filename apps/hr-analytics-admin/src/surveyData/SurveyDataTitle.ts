import { SurveyData as TSurveyData } from "../api/surveyData/SurveyData";

export const SURVEYDATA_TITLE_FIELD = "surveyTitle";

export const SurveyDataTitle = (record: TSurveyData): string => {
  return record.surveyTitle?.toString() || String(record.id);
};
