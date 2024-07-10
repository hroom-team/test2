import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserDataService } from "./userData.service";
import { UserDataControllerBase } from "./base/userData.controller.base";

@swagger.ApiTags("userData")
@common.Controller("userData")
export class UserDataController extends UserDataControllerBase {
  constructor(protected readonly service: UserDataService) {
    super(service);
  }
}
