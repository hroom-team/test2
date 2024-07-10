import { Module } from "@nestjs/common";
import { SurveyDataModuleBase } from "./base/surveyData.module.base";
import { SurveyDataService } from "./surveyData.service";
import { SurveyDataController } from "./surveyData.controller";
import { SurveyDataResolver } from "./surveyData.resolver";

@Module({
  imports: [SurveyDataModuleBase],
  controllers: [SurveyDataController],
  providers: [SurveyDataService, SurveyDataResolver],
  exports: [SurveyDataService],
})
export class SurveyDataModule {}
