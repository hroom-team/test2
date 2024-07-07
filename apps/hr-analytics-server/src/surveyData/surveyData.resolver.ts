import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SurveyDataResolverBase } from "./base/surveyData.resolver.base";
import { SurveyData } from "./base/SurveyData";
import { SurveyDataService } from "./surveyData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SurveyData)
export class SurveyDataResolver extends SurveyDataResolverBase {
  constructor(
    protected readonly service: SurveyDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
