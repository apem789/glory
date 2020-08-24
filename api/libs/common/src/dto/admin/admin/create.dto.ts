import { ApiProperty } from "@nestjs/swagger";

/** 新建新管理员AdminCreateDto */
export class AdminCreateDto {
  @ApiProperty({ required: true, description: '账号' })
  account: string

  @ApiProperty({ required: true, description: '密码' })
  secret: string
}
