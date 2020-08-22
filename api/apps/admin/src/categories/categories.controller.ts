import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, ForbiddenException, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoryCreateDto } from '@libs/common/dto/admin/category/create.dto';
import { CategoryUpdateDto } from '@libs/common/dto/admin/category/update.dto';
import { SelectDto } from '@libs/common/dto/admin/category/select.dto';
import { DeleteMoreDto } from '@libs/common/dto/admin/category/delete.dto';

@ApiTags('分类管理')
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoryService: CategoriesService
  ) {}

  @ApiOperation({ summary: '获取分类列表' })
  @Get('')
  getCategoryList(@Query() selectDto: SelectDto) {
    console.log('query: ', selectDto)
    return this.categoryService.getCategoryList(selectDto)
  }

  @ApiOperation({ summary: '查询某id分类的详细信息' })
  @Get(':id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.getCategoryById(id)
  }

  @ApiOperation({ summary: '新建分类' })
  @Post('create')
  createNewCategory(@Body() createDto: CategoryCreateDto) {
    return this.categoryService.createNewCategory(createDto)
  }

  @ApiOperation({ summary: '更新某分类的信息' })
  @Post('update/:id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: CategoryUpdateDto
  ) {
    return this.categoryService.updateCategory(id, updateDto)
  }

  @ApiOperation({ summary: '删除某id分类' })
  @Delete('delete/:id')
  deletCategory(@Param('id', ParseIntPipe) id: number) {
    console.log('id ', id)
    return this.categoryService.deleteCategoryById(id)
  }

  @ApiOperation({ summary: '删除一组id的分类' })
  @Delete('delete')
  deleteCategories(@Body() deleteMoreDto: DeleteMoreDto) {
    const { ids } = deleteMoreDto
    console.log('ids is ', ids)
    return this.categoryService.deleteCategoriesByIds(ids)
  }
}
