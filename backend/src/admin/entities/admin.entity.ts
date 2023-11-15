import { Product } from "src/product/entities/product.entity";
import { BeforeInsert, Column, CreateDateColumn, Entity, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import * as bcrypt from 'bcrypt';

@Entity()
export class Admin {
  @PrimaryGeneratedColumn('uuid')
  id:string;
  
  @Column({ nullable: false, type: 'varchar', length: 120 })
  name: string;
  
  @Column({ nullable: false, type: 'varchar' })
  password: string;
  
  @Column({ unique: true ,nullable: false, type: 'varchar', length: 120 })
  email: string;
  
  @Column({name: 'is-admin',nullable: true, default: true})
  isAdmin: boolean;

  @CreateDateColumn({name: 'created-at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated-at'})
  updatedAt: Date;

  @ManyToMany(() => Product, product => product.admin )
  product: Product[]

 validatePassword(password: string): boolean {
    return bcrypt.compareSync(password, this.password);
  }

  @BeforeInsert()
   hashPassword(){
    this.password = bcrypt.hashSync(this.password, 10);
  }

}