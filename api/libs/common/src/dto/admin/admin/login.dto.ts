import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Length } from 'class-validator';

/** admin账号登录的结构体 */
export class AdminLoginDto {
  @ApiProperty({ required: true, description: '账号' })
  @IsNotEmpty({ message: '账号不能为空' })
  @IsString({ message: '字符串类型' })
  @Length(4, 32, { message: '账号长度需大于4小于32位' })
  account: string

  @ApiProperty({ required: true, description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @IsString({ message: '字符串类型' })
  @Length(6, 32, { message: '账号长度需大于6小于32位' })
  secret: string
}