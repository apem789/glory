import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, Length } from 'class-validator';

/** 新建新管理员AdminCreateDto */
export class AdminCreateDto {
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
