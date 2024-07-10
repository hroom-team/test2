import * as graphql from "@nestjs/graphql";
import { UserDataResolverBase } from "./base/userData.resolver.base";
import { UserData } from "./base/UserData";
import { UserDataService } from "./userData.service";

@graphql.Resolver(() => UserData)
export class UserDataResolver extends UserDataResolverBase {
  constructor(protected readonly service: UserDataService) {
    super(service);
  }
}
