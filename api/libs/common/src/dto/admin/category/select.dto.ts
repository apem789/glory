import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsInt } from 'class-validator';

/** 列表查询参数dto */
export class CategorySelectDto {
  @ApiProperty({ type: Number, required: false, description: '偏移量,默认:0', example: 0, default: 0 })
  @IsOptional()
  // @IsString({ message: 'start:整数类型' })
  @IsInt({ message: 'start:整数类型' })
  // @Min(0, { message: 'start:最小值为0' })
  start: number

  @ApiProperty({ type: Number, required: false, description: '一次查询返回的条目,默认:10', example: 10, default: 10 })
  @IsOptional()
  // @IsString({ message: 'limit:整数类型' })
  @IsInt({ message: 'limit:整数类型' })
  // @Min(10, { message: 'limit:最小值为10' })
  limit: number
}