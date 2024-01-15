import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { DepartmentService } from 'src/department/department.service';
import { Department } from 'src/department/entities/department.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Student, Department])],
  providers: [StudentResolver, StudentService, DepartmentService],
  exports: [StudentService]
})
export class StudentModule {}
