import { ApiProperty } from "@nestjs/swagger";

/** 删除一组id的管理员AdminDTO */
export class AdminDeleteDto {
  @ApiProperty({ type: [Number], required: true, description: '要删除的id数组' })
  ids: number[]
}