import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("ManageFeedbackResultObject")
class ManageFeedbackResult {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    feedbackStatus!: string;
}

export { ManageFeedbackResult as ManageFeedbackResult };