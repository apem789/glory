import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty } from 'class-validator';

/** 删除一组id的管理员AdminDTO */
export class AdminDeleteDto {
  @ApiProperty({ type: [Number], required: true, description: '要删除的id数组' })
  @IsNotEmpty({ message: '参数必传' })
  @IsArray({ message: '需要传数组' })
  ids: number[]
}