import { ApiProperty } from "@nestjs/swagger";

/** 要更新的管理员AdminUpdateDto */
export class AdminUpdateDto {
  @ApiProperty({ required: true, description: '账号' })
  accout: string

  @ApiProperty({ required: true, description: '密码' })
  secret: string
}
