import { ApiProperty } from "@nestjs/swagger";

/** 查询管理员数据列表AdminSeleteDto */
export class AdminSeleteDto {
  @ApiProperty({ type: Number, required: true, description: '开始偏移位置', default: 0, example: 0 })
  start: number

  @ApiProperty({ type: Number, required: false, description: '每次查询返回的条目', default: 10, example: 10 })
  limit: number
}