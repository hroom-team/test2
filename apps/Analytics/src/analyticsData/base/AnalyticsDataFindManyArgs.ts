/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticsDataWhereInput } from "./AnalyticsDataWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { AnalyticsDataOrderByInput } from "./AnalyticsDataOrderByInput";

@ArgsType()
class AnalyticsDataFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => AnalyticsDataWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => AnalyticsDataWhereInput, { nullable: true })
  @Type(() => AnalyticsDataWhereInput)
  where?: AnalyticsDataWhereInput;

  @ApiProperty({
    required: false,
    type: [AnalyticsDataOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [AnalyticsDataOrderByInput], { nullable: true })
  @Type(() => AnalyticsDataOrderByInput)
  orderBy?: Array<AnalyticsDataOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { AnalyticsDataFindManyArgs as AnalyticsDataFindManyArgs };