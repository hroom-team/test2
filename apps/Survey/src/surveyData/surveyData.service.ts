import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SurveyDataServiceBase } from "./base/surveyData.service.base";

@Injectable()
export class SurveyDataService extends SurveyDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
