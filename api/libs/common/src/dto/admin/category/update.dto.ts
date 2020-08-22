import { ApiProperty } from "@nestjs/swagger";

/** 更新某CategoryDto信息 */
export class CategoryUpdateDto {
  @ApiProperty({ required: false, description: '修改的类别名称' })
  name: string

  @ApiProperty({ required: false, default: '', description: '修改的新的注释', example: '' })
  description: string

  @ApiProperty({ required: true, default: 0, description: '父级分类的id, 默认: 0, 代表顶级父类' })
  parentId: number
}