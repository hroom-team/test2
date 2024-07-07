/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, AnalyticsData as PrismaAnalyticsData } from "@prisma/client";
import { SurveyDataCreateInput } from "../../surveyData/base/SurveyDataCreateInput";
import { AnalyzeSurveyDataResult } from "../AnalyzeSurveyDataResult";

export class AnalyticsDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AnalyticsDataCountArgs, "select">
  ): Promise<number> {
    return this.prisma.analyticsData.count(args);
  }

  async analyticsDataItems(
    args: Prisma.AnalyticsDataFindManyArgs
  ): Promise<PrismaAnalyticsData[]> {
    return this.prisma.analyticsData.findMany(args);
  }
  async analyticsData(
    args: Prisma.AnalyticsDataFindUniqueArgs
  ): Promise<PrismaAnalyticsData | null> {
    return this.prisma.analyticsData.findUnique(args);
  }
  async createAnalyticsData(
    args: Prisma.AnalyticsDataCreateArgs
  ): Promise<PrismaAnalyticsData> {
    return this.prisma.analyticsData.create(args);
  }
  async updateAnalyticsData(
    args: Prisma.AnalyticsDataUpdateArgs
  ): Promise<PrismaAnalyticsData> {
    return this.prisma.analyticsData.update(args);
  }
  async deleteAnalyticsData(
    args: Prisma.AnalyticsDataDeleteArgs
  ): Promise<PrismaAnalyticsData> {
    return this.prisma.analyticsData.delete(args);
  }
  async AnalyzeSurveyData(
    args: SurveyDataCreateInput
  ): Promise<AnalyzeSurveyDataResult> {
    throw new Error("Not implemented");
  }
}