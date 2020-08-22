import { ApiProperty } from '@nestjs/swagger';

/** 新建CategoryDto */
export class CategoryCreateDto {
  @ApiProperty({ required: true, description: '新建类别名称' })
  name: string

  @ApiProperty({ required: false, default: '', description: '注释', example: '' })
  description: string

  @ApiProperty({ required: true, default: 0, description: '父级分类的id, 默认: 0, 代表顶级父类' })
  parentId: number
}
