import { ApiProperty } from "@nestjs/swagger";

/** 列表查询参数dto */
export class CategorySelectDto {
  @ApiProperty({ type: Number, required: true, description: '偏移量,默认:0', example: 0, default: 0 })
  start: number

  @ApiProperty({ type: Number, required: false, description: '一次查询返回的条目,默认:10', example: 10, default: 10 })
  limit: number
}
