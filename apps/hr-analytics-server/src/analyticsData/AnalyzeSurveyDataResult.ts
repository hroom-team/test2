import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("AnalyzeSurveyDataResultObject")
class AnalyzeSurveyDataResult {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    result!: string;
}

export { AnalyzeSurveyDataResult as AnalyzeSurveyDataResult };