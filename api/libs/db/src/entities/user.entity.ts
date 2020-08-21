import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/** 普通用户 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment:'账号' })
  account: string

  @Column({ comment: '密码' })
  secret: string
}
