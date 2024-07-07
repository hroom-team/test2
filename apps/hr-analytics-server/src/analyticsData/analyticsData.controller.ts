import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalyticsDataService } from "./analyticsData.service";
import { AnalyticsDataControllerBase } from "./base/analyticsData.controller.base";

@swagger.ApiTags("analyticsData")
@common.Controller("analyticsData")
export class AnalyticsDataController extends AnalyticsDataControllerBase {
  constructor(
    protected readonly service: AnalyticsDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
