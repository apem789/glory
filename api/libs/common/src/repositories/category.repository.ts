import { EntityRepository, Repository } from "typeorm";
import { Category } from '@libs/db/entities/category.eneity'
import { CategoryCreateDto } from "../dto/admin/category/create.dto";
import { ForbiddenException } from "@nestjs/common";
import { CategoryUpdateDto } from "../dto/admin/category/update.dto";
import { SelectDto } from "../dto/admin/category/select.dto";

/** 分类表操作 */
@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {

  /** 创建新类目 */
  async createNewCategory(createDto: CategoryCreateDto): Promise<void> {
    const { name, parentId, description } = createDto

    const has = await this.findOne({ where: { name } })
    if (has) {
      throw new ForbiddenException('分类名已存在,无须再创建')
    }

    const newCategory = new Category()
    newCategory.name = name
    newCategory.description = description
    newCategory.parentId = parentId
    await this.save(newCategory)
  }

  /** 更新某id分类的名称 */
  async updateOneCategory(id: number, updateDto: CategoryUpdateDto): Promise<void> {
    const { name: newName, parentId, description } = updateDto

    const currentCategory = id && await this.findOne({ id })
    if (!currentCategory) {
      throw new ForbiddenException('想要修改的类别不存在')
    }

    currentCategory.name = newName
    currentCategory.parentId = parentId
    currentCategory.description = description
    await this.save(currentCategory)
  }

  /**
   * 查询分类列表
   * @param start 偏移量, 默认: 0
   * @param limit 返回的条目区间, 默认: 10
   */
  async getCategoryList(selectDto: SelectDto): Promise<{
    list: Category[],
    count: number
  }> {
    const { start, limit } = selectDto

    const [list, count] = await this.findAndCount({ skip: start || 0, take: limit || 10 })

    return {
      list,
      count,
    }
  }

  /**
   * 根据id查询某个分类信息
   * @param id id号
   */
  async getCategoryById(id: number): Promise<Category> {
    const currentCategory = id && await this.findOne({ id })
    if (!currentCategory) {
      throw new ForbiddenException('对应的分类不存在')
    }
    return currentCategory
  }

  /**
   * 删除id的分类记录
   * @param id 分类的id
   */
  async deleteCategoryById(id: number): Promise<void> {
    const currentCategory = await this.findOne({ id })
    if (!currentCategory) {
      throw new ForbiddenException("所选的分类不存在")
    }
    this.remove(currentCategory)
  }

  /**
   * 删除某组id数组对应的分类记录
   * @param ids 分类的id数组
   */
  async deleteCategoriesByIds(ids: number[]): Promise<void> {
    const res = await this.delete(ids)
    if (res.affected === 0) {
      throw new ForbiddenException("部分分类不存在,操作完成")
    }
  }

}
