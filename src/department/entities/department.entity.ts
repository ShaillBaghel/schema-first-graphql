

import { Student } from 'src/student/entities/student.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
/**
 * This entity class maps to a database table department.
 */

@Entity()
export class Department extends BaseEntity {
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


  @OneToMany(()=> Student, (student: Student)=> student.department)
  students: Student[]

  /**
   * department contains column created_at holds type date.
   */
 
  @Column({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
