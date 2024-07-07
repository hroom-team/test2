import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SurveyDataModuleBase } from "./base/surveyData.module.base";
import { SurveyDataService } from "./surveyData.service";
import { SurveyDataController } from "./surveyData.controller";
import { SurveyDataResolver } from "./surveyData.resolver";

@Module({
  imports: [SurveyDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [SurveyDataController],
  providers: [SurveyDataService, SurveyDataResolver],
  exports: [SurveyDataService],
})
export class SurveyDataModule {}
