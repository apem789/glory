import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsNumber, IsNotEmpty, Min } from 'class-validator';

/** 列表查询参数dto */
export class CategorySelectDto {
  @ApiProperty({ type: Number, required: true, description: '偏移量,默认:0', example: 0, default: 0 })
  @IsNotEmpty({ message: '开始偏移量,必传参数' })
  @IsNumber(undefined, { message: '数字类型' })
  @Min(0, { message: '最小值为0' })
  start: number

  @ApiProperty({ type: Number, required: false, description: '一次查询返回的条目,默认:10', example: 10, default: 10 })
  @IsOptional()
  @IsNumber(undefined, { message: '数字类型' })
  @Min(10, { message: '最小值为10' })
  limit: number
}
