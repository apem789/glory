import { Injectable } from '@nestjs/common';
import { CategoryRepository } from '@libs/common/repositories/category.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryCreateDto } from '@libs/common/dto/admin/category/create.dto';
import { CategoryUpdateDto } from '@libs/common/dto/admin/category/update.dto';
import { SelectDto } from '@libs/common/dto/admin/category/select.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryReopitory: CategoryRepository
  ) {}

  /**
   * 创建新的分类
   * @param createDto 
   */
  async createNewCategory(createDto: CategoryCreateDto) {
    await this.categoryReopitory.createNewCategory(createDto)
    return {
      msg: '创建成功',
    }
  }

  /**
   * 删除某id的分类记录
   * @param id 分类的id号
   */
  async deleteCategoryById(id: number) {
    await this.categoryReopitory.deleteCategoryById(id)
    return {
      msg: '删除成功'
    }
  }

  /**
   * 删除某组id数组对应的分类记录
   * @param ids 分类的id数组
   */
  async deleteCategoriesByIds(ids: number[]) {
    await this.categoryReopitory.deleteCategoriesByIds(ids)
    return {
      msg: '选中的id数组的分类记录已全部删除成功'
    }
  }

  /**
   * 更新某个id的分类信息
   * @param id 分类的id
   * @param updateDto 
   */
  async updateCategory(id: number, updateDto: CategoryUpdateDto) {
    await this.categoryReopitory.updateOneCategory(id, updateDto)
    return {
      msg: '修改成功'
    }
  }

  /**
   * 查询分类列表
   * @param start 开始的偏移量
   * @param limit 返回的条数
   */
  async getCategoryList(selectDto: SelectDto) {

    const res = await this.categoryReopitory.getCategoryList(selectDto)
    return {
      ...res,
      ...selectDto,
    }
  }
}
