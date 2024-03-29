import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentResolver } from './department.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Department } from './entities/department.entity';
import { Student } from 'src/student/entities/student.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Department, Student])],
  providers: [DepartmentResolver, DepartmentService],
  exports: [DepartmentService]
})
export class DepartmentModule {}
