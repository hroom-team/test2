import { SurveyDataWhereInput } from "./SurveyDataWhereInput";
import { SurveyDataOrderByInput } from "./SurveyDataOrderByInput";

export type SurveyDataFindManyArgs = {
  where?: SurveyDataWhereInput;
  orderBy?: Array<SurveyDataOrderByInput>;
  skip?: number;
  take?: number;
};
