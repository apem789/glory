import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString, Length, IsNumber, Min } from 'class-validator';

/** 更新某CategoryDto信息 */
export class CategoryUpdateDto {
  @ApiProperty({ required: false, description: '修改的类别名称' })
  @IsOptional()
  @IsString({ message: '字符串类型' })
  @Length(1, 10, { message: '长度在1-10之间' })
  name: string

  @ApiProperty({ required: false, default: '', description: '修改的新的注释', example: '' })
  @IsOptional()
  @IsString({ message: '字符串类型' })
  @Length(0, 32, { message: '长度在0-32之间' })
  description: string

  @ApiProperty({ required: true, default: 0, description: '父级分类的id, 默认: 0, 代表顶级父类' })
  @IsOptional()
  @IsNumber(undefined, { message: '数字类型' })
  @Min(0, { message: '最小值为: 0' })
  parentId: number
}