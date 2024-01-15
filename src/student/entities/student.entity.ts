

import { Department } from 'src/department/entities/department.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class Student {
  /**
   * department contains column id holds type string.
   */

  @PrimaryGeneratedColumn('uuid')
  id: string;
  /**
   * department contains column name holds type string.
   */

  @Column({ type: 'varchar' })
  name: string;


  @Column({ type: 'varchar' })
  email: string;


  @Column({ type: 'varchar' })
  password: string;

  
  // @ResolvedField()
  @Column({ type: 'varchar',  nullable: true })
  departmentId: string

//   
  @ManyToOne(()=> Department, (department: Department)=> department.students)
  department: Department

  /**
   * department contains column created_at holds type date.
   */

  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}




