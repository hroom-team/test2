import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalyticsDataModuleBase } from "./base/analyticsData.module.base";
import { AnalyticsDataService } from "./analyticsData.service";
import { AnalyticsDataController } from "./analyticsData.controller";
import { AnalyticsDataResolver } from "./analyticsData.resolver";

@Module({
  imports: [AnalyticsDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalyticsDataController],
  providers: [AnalyticsDataService, AnalyticsDataResolver],
  exports: [AnalyticsDataService],
})
export class AnalyticsDataModule {}
