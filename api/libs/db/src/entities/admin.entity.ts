import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

/** 管理员 */
@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ comment: '账号' })
  account: string

  @Column({ comment: '密码' })
  secret: string
}
