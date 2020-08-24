import { ApiProperty } from "@nestjs/swagger";

/** 删除某个id的分类信息DTO */
export class CategoryDeleteDto {
  @ApiProperty({ type: Number, required: true, description: 'id号', example: -1, default: -1 })
  id: number
}

/** 删除一组id的分类信息DTO */
export class CategoryDeleteMoreDto {
  @ApiProperty({ type: [Number], required: true, description: '一组id', example: [999], default: [999] })
  ids: number[]
}