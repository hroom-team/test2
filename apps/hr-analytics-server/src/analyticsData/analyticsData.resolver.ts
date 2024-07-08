import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalyticsDataResolverBase } from "./base/analyticsData.resolver.base";
import { AnalyticsData } from "./base/AnalyticsData";
import { AnalyticsDataService } from "./analyticsData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalyticsData)
export class AnalyticsDataResolver extends AnalyticsDataResolverBase {
  constructor(
    protected readonly service: AnalyticsDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
