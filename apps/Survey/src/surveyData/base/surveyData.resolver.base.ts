/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { SurveyData } from "./SurveyData";
import { SurveyDataCountArgs } from "./SurveyDataCountArgs";
import { SurveyDataFindManyArgs } from "./SurveyDataFindManyArgs";
import { SurveyDataFindUniqueArgs } from "./SurveyDataFindUniqueArgs";
import { CreateSurveyDataArgs } from "./CreateSurveyDataArgs";
import { UpdateSurveyDataArgs } from "./UpdateSurveyDataArgs";
import { DeleteSurveyDataArgs } from "./DeleteSurveyDataArgs";
import { SurveyDataService } from "../surveyData.service";
@graphql.Resolver(() => SurveyData)
export class SurveyDataResolverBase {
  constructor(protected readonly service: SurveyDataService) {}

  async _surveyDataItemsMeta(
    @graphql.Args() args: SurveyDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [SurveyData])
  async surveyDataItems(
    @graphql.Args() args: SurveyDataFindManyArgs
  ): Promise<SurveyData[]> {
    return this.service.surveyDataItems(args);
  }

  @graphql.Query(() => SurveyData, { nullable: true })
  async surveyData(
    @graphql.Args() args: SurveyDataFindUniqueArgs
  ): Promise<SurveyData | null> {
    const result = await this.service.surveyData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => SurveyData)
  async createSurveyData(
    @graphql.Args() args: CreateSurveyDataArgs
  ): Promise<SurveyData> {
    return await this.service.createSurveyData({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => SurveyData)
  async updateSurveyData(
    @graphql.Args() args: UpdateSurveyDataArgs
  ): Promise<SurveyData | null> {
    try {
      return await this.service.updateSurveyData({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => SurveyData)
  async deleteSurveyData(
    @graphql.Args() args: DeleteSurveyDataArgs
  ): Promise<SurveyData | null> {
    try {
      return await this.service.deleteSurveyData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}