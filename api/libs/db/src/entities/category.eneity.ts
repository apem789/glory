import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/** 分类 */
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ unique: true, comment: '分类名称' })
  name: string

  @Column({ comment: '注释' })
  description: string

  @Column({ name: 'parent_id', nullable: false, default: 0, comment: '父级分类的id, 默认: 0, 代表顶级父类' })
  parentId: number
}
