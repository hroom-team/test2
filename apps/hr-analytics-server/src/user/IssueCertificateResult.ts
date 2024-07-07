import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("IssueCertificateResultObject")
class IssueCertificateResult {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    certificate!: string;
}

export { IssueCertificateResult as IssueCertificateResult };