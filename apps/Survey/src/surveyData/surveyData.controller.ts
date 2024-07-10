import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SurveyDataService } from "./surveyData.service";
import { SurveyDataControllerBase } from "./base/surveyData.controller.base";

@swagger.ApiTags("surveyData")
@common.Controller("surveyData")
export class SurveyDataController extends SurveyDataControllerBase {
  constructor(protected readonly service: SurveyDataService) {
    super(service);
  }
}
