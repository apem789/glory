import { Controller, Get, Post, Body, Param, ParseIntPipe, Query, Delete, Put, UsePipes, ValidationPipe, Req } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CategoriesService } from './categories.service';
import { CategoryCreateDto } from '@libs/common/dto/admin/category/create.dto';
import { CategoryUpdateDto } from '@libs/common/dto/admin/category/update.dto';
import { CategorySelectDto } from '@libs/common/dto/admin/category/select.dto';
import { CategoryDeleteMoreDto } from '@libs/common/dto/admin/category/delete.dto';
import { Category } from '@libs/db/entities/category.eneity';
import { CategorySelectPipe } from '@libs/common/pipe/admin/category/selete.pipe';

@ApiTags('分类管理')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryService: CategoriesService) {}

  @ApiOperation({ summary: '获取分类列表' })
  @Get()
  getCategoryList(
    @Query('start') start: number | string,
    @Query('limit') limit: number | string,
    @Query(CategorySelectPipe) query,
  ): Promise<void> {
    // TODO
    // bug: queryc参数与dto参数类型不一致
    // 无法正确转换
    console.log('query: ', query)
    return this.categoryService.getCategoryList(query)
  }

  @ApiOperation({ summary: '查询某id分类的详细信息' })
  @Get(':id')
  getCategoryById(@Param('id', ParseIntPipe) id: number) {
    return this.categoryService.getCategoryById(id)
  }

  @ApiOperation({ summary: '新建分类' })
  @Post()
  createNewCategory(@Body() createDto: CategoryCreateDto) {
    return this.categoryService.createNewCategory(createDto)
  }

  @ApiOperation({ summary: '更新某分类的信息' })
  @Put(':id')
  updateCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: CategoryUpdateDto,
  ) {
    return this.categoryService.updateCategory(id, updateDto)
  }

  @ApiOperation({ summary: '删除某id分类' })
  @Delete(':id')
  deletCategory(@Param('id', ParseIntPipe) id: number) {
    console.log('id ', id)
    return this.categoryService.deleteCategoryById(id)
  }

  @ApiOperation({ summary: '删除一组id的分类' })
  @Post('deletion')
  deleteCategories(@Body() deleteMoreDto: CategoryDeleteMoreDto) {
    const { ids } = deleteMoreDto
    console.log('ids is ', ids)
    return this.categoryService.deleteCategoriesByIds(ids)
  }
}
