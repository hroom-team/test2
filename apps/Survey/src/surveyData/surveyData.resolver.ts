import * as graphql from "@nestjs/graphql";
import { SurveyDataResolverBase } from "./base/surveyData.resolver.base";
import { SurveyData } from "./base/SurveyData";
import { SurveyDataService } from "./surveyData.service";

@graphql.Resolver(() => SurveyData)
export class SurveyDataResolver extends SurveyDataResolverBase {
  constructor(protected readonly service: SurveyDataService) {
    super(service);
  }
}
