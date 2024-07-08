import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserDataModuleBase } from "./base/userData.module.base";
import { UserDataService } from "./userData.service";
import { UserDataController } from "./userData.controller";
import { UserDataResolver } from "./userData.resolver";

@Module({
  imports: [UserDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserDataController],
  providers: [UserDataService, UserDataResolver],
  exports: [UserDataService],
})
export class UserDataModule {}
