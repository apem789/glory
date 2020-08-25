import { ApiProperty } from "@nestjs/swagger";
import { IsOptional,IsString, Length } from 'class-validator';

/** 要更新的管理员AdminUpdateDto */
export class AdminUpdateDto {
  @ApiProperty({ required: false, description: '账号' })
  @IsOptional()
  @IsString({ message: '字符串类型' })
  @Length(4, 32, { message: '账号长度需大于4小于32位' })
  account: string

  @ApiProperty({ required: false, description: '密码' })
  @IsOptional()
  @IsString({ message: '字符串类型' })
  @Length(6, 32, { message: '账号长度需大于6小于32位' })
  secret: string
}
