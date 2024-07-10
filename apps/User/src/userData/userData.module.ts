import { Module } from "@nestjs/common";
import { UserDataModuleBase } from "./base/userData.module.base";
import { UserDataService } from "./userData.service";
import { UserDataController } from "./userData.controller";
import { UserDataResolver } from "./userData.resolver";

@Module({
  imports: [UserDataModuleBase],
  controllers: [UserDataController],
  providers: [UserDataService, UserDataResolver],
  exports: [UserDataService],
})
export class UserDataModule {}
