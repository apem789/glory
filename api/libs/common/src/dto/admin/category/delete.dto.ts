import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsNotEmpty, IsArray } from 'class-validator';

/** 删除某个id的分类信息DTO */
export class CategoryDeleteDto {
  @ApiProperty({ type: Number, required: true, description: 'id号', example: -1, default: -1 })
  @IsNotEmpty({ message: '不为空' })
  @IsNumber(undefined, { message: '数字类型' })
  id: number
}

/** 删除一组id的分类信息DTO */
export class CategoryDeleteMoreDto {
  @ApiProperty({ type: [Number], required: true, description: '一组id', example: [999], default: [999] })
  @IsNotEmpty({ message: '不为空' })
  @IsArray({ message: '数组类型' })
  ids: number[]
}