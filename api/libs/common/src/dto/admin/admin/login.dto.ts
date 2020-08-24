import { AdminCreateDto } from "./create.dto";
import { ApiProperty } from "@nestjs/swagger";


/** admin账号登录的结构体 */
export class AdminLoginDto extends AdminCreateDto {
  @ApiProperty({ required: true, description: '账号' })
  account: string

  @ApiProperty({ required: true, description: '密码' })
  secret: string
}