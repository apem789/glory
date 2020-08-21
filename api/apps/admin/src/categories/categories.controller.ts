import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('分类管理')
@Controller('categories')
export class CategoriesController {
  // TODO
  /**
   * 创建分类
   * 分类列表
   * 修改分类
   * 删除分类
   * 子分类
   */

  @Get('list')
  getCategoryList() {
    return [
      {
        title: '',
        name: '',
        des: '',
        index: 0
      }
    ]
  }

  @Post('/add')
  createNewCategory(@Body() body) {
    return {
      msg: '创建新分类'
    }
  }
}
