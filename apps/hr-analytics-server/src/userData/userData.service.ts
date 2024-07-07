import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDataServiceBase } from "./base/userData.service.base";

@Injectable()
export class UserDataService extends UserDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
