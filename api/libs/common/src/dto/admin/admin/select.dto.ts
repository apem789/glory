import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, Min } from 'class-validator';

/** 查询管理员数据列表AdminSeleteDto */
export class AdminSeleteDto {
  @ApiProperty({ type: Number, required: true, description: '开始偏移位置', default: 0, example: 0 })
  @IsNotEmpty({ message: '开始偏移量,必传参数' })
  @IsNumber(undefined, { message: '数字类型' })
  @Min(0, { message: '最小值为0' })
  start: number

  @ApiProperty({ type: Number, required: true, description: '每次查询返回的条目', default: 10, example: 10 })
  @IsNotEmpty({ message: '每次查询返回的条目' })
  @IsNumber(undefined, { message: '数字类型' })
  @Min(10, { message: '最小值为10' })
  limit: number
}